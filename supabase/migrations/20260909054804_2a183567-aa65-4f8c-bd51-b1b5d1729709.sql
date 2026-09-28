CREATE TYPE public.app_role AS ENUM ('admin', 'faculty', 'club', 'student');
CREATE TYPE public.event_status AS ENUM ('draft', 'pending_approval', 'approved', 'rejected');
CREATE TYPE public.event_hosted AS ENUM ('self', 'iic');

CREATE TABLE public.profiles (
  id uuid PRIMARY KEY,
  display_name text,
  email text UNIQUE,
  avatar_url text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Profiles are publicly readable" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users manage own profile" ON public.profiles FOR ALL TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  role public.app_role NOT NULL,
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own roles" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE TABLE public.clubs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  about text,
  faculty_coordinator text,
  owner_id uuid,
  avatar_url text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.clubs TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.clubs TO authenticated;
GRANT ALL ON public.clubs TO service_role;
ALTER TABLE public.clubs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Clubs are publicly readable" ON public.clubs FOR SELECT USING (true);
CREATE POLICY "Owners manage clubs" ON public.clubs FOR ALL TO authenticated USING (owner_id = auth.uid() OR public.has_role(auth.uid(), 'admin')) WITH CHECK (owner_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

CREATE TABLE public.events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  event_type text NOT NULL,
  status public.event_status NOT NULL DEFAULT 'draft',
  hosted public.event_hosted NOT NULL DEFAULT 'self',
  club_id uuid REFERENCES public.clubs(id) ON DELETE SET NULL,
  venue text,
  city text,
  start_datetime timestamptz,
  end_datetime timestamptz,
  banner_url text,
  budget numeric(12,2),
  theme_colors jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.events TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.events TO authenticated;
GRANT ALL ON public.events TO service_role;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Approved events are public" ON public.events FOR SELECT USING (status = 'approved' OR public.has_role(auth.uid(), 'admin') OR EXISTS (SELECT 1 FROM public.clubs c WHERE c.id = club_id AND c.owner_id = auth.uid()));
CREATE POLICY "Club owners manage events" ON public.events FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin') OR EXISTS (SELECT 1 FROM public.clubs c WHERE c.id = club_id AND c.owner_id = auth.uid())) WITH CHECK (public.has_role(auth.uid(), 'admin') OR EXISTS (SELECT 1 FROM public.clubs c WHERE c.id = club_id AND c.owner_id = auth.uid()));

CREATE TABLE public.event_tickets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id uuid NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  name text NOT NULL,
  class text,
  price numeric(10,2) NOT NULL DEFAULT 0,
  inclusions text[] NOT NULL DEFAULT '{}',
  available integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.event_tickets TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.event_tickets TO authenticated;
GRANT ALL ON public.event_tickets TO service_role;
ALTER TABLE public.event_tickets ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Tickets for approved events are public" ON public.event_tickets FOR SELECT USING (EXISTS (SELECT 1 FROM public.events e WHERE e.id = event_id AND e.status = 'approved'));
CREATE POLICY "Club owners manage tickets" ON public.event_tickets FOR ALL TO authenticated USING (EXISTS (SELECT 1 FROM public.events e JOIN public.clubs c ON c.id = e.club_id WHERE e.id = event_id AND (c.owner_id = auth.uid() OR public.has_role(auth.uid(), 'admin')))) WITH CHECK (EXISTS (SELECT 1 FROM public.events e JOIN public.clubs c ON c.id = e.club_id WHERE e.id = event_id AND (c.owner_id = auth.uid() OR public.has_role(auth.uid(), 'admin'))));

CREATE OR REPLACE FUNCTION public.set_updated_at() RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$ BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;
CREATE TRIGGER profiles_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER clubs_updated_at BEFORE UPDATE ON public.clubs FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER events_updated_at BEFORE UPDATE ON public.events FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER event_tickets_updated_at BEFORE UPDATE ON public.event_tickets FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

INSERT INTO public.clubs (id, name, about, faculty_coordinator) VALUES
('10000000-0000-4000-8000-000000000001', 'Demo Innovation Club', 'A club dedicated to fostering innovation, creativity, and technical excellence among students at MLRIT.', 'Dr. Faculty Coordinator'),
('10000000-0000-4000-8000-000000000002', 'Tech Innovators Club', 'Focused on cutting-edge technology, open source contributions, and building real-world projects.', 'Prof. Tech Coordinator');

INSERT INTO public.events (id, name, description, event_type, status, hosted, club_id, venue, city, start_datetime, end_datetime, banner_url) VALUES
('20000000-0000-4000-8000-000000000001', 'HackFest 2025', 'A flagship innovation sprint bringing student teams together to build practical solutions.', 'Hackathon', 'approved', 'iic', '10000000-0000-4000-8000-000000000001', 'MLRIT CIE', 'Hyderabad', '2026-10-06T09:00:00Z', '2026-10-07T18:00:00Z', '/events/metaloop.png'),
('20000000-0000-4000-8000-000000000002', 'AI Workshop Series', 'Hands-on sessions exploring applied artificial intelligence and emerging tools.', 'Workshop', 'approved', 'iic', '10000000-0000-4000-8000-000000000002', 'Innovation Lab', 'Hyderabad', '2026-10-12T10:00:00Z', '2026-10-12T16:00:00Z', '/events/equniox.png'),
('20000000-0000-4000-8000-000000000003', 'Web Development Bootcamp', 'A practical web development program focused on modern product building.', 'Bootcamp', 'approved', 'self', '10000000-0000-4000-8000-000000000002', 'CSE Seminar Hall', 'Hyderabad', '2026-10-18T09:30:00Z', '2026-10-18T17:00:00Z', '/events/wc 2.0.png');

INSERT INTO public.event_tickets (event_id, name, class, price, inclusions, available) VALUES
('20000000-0000-4000-8000-000000000001', 'Participant Pass', 'General', 499, ARRAY['36-hour access', 'Mentor sessions'], 250),
('20000000-0000-4000-8000-000000000002', 'Workshop Entry', 'General', 0, ARRAY['All sessions'], 120),
('20000000-0000-4000-8000-000000000003', 'Bootcamp Pass', 'General', 299, ARRAY['Workshop materials'], 100);