-- ============================================================
-- EMS Demo Seed Data
-- Run this in the Supabase SQL Editor
-- ============================================================

-- Demo User (matches credentials: demo@example.com)
-- UUID is deterministic: uuidv5("demo@example.com", "1e1eb861-ee4f-4c5e-bed1-04ee744e8559")
-- = 7e3b1b7f-5f5b-5c4e-b16a-0c8e3d6e7f5a  (approx, replace with actual if needed)

-- Step 1: Insert demo users
INSERT INTO public.users (id, email, full_name, avatar_url, created_at, updated_at)
VALUES
  (
    '0dff3d4e-79b9-5d5b-acd7-69ee314b1fd6',
    'demo@example.com',
    'Demo Club',
    null,
    NOW(),
    NOW()
  ),
  (
    '104ad68b-1cf2-5c0c-bd1f-78e5b49eb9ec',
    'techclub@mlrit.ac.in',
    'Tech Innovators Club',
    null,
    NOW(),
    NOW()
  )
ON CONFLICT (id) DO UPDATE SET
  full_name = EXCLUDED.full_name,
  updated_at = NOW();

-- Step 2: Insert demo clubs
INSERT INTO public.clubs (id, name, about, faculty_coordinator, faculty_coordinator_designation, owner_id, avatar_url, created_at, updated_at)
VALUES
  (
    '0dff3d4e-79b9-5d5b-acd7-69ee314b1fd6',
    'Demo Innovation Club',
    'A demo club dedicated to fostering innovation, creativity, and technical excellence among students at MLRIT. We organize hackathons, workshops, and industry talks throughout the year.',
    'Dr. Ramesh Kumar',
    'Associate Professor, CSE Department',
    '0dff3d4e-79b9-5d5b-acd7-69ee314b1fd6',
    null,
    NOW(),
    NOW()
  ),
  (
    '104ad68b-1cf2-5c0c-bd1f-78e5b49eb9ec',
    'Tech Innovators Club',
    'The premier tech club at MLRIT focused on cutting-edge technology, open source contributions, and building real-world projects.',
    'Prof. Sunita Sharma',
    'Assistant Professor, IT Department',
    '104ad68b-1cf2-5c0c-bd1f-78e5b49eb9ec',
    null,
    NOW(),
    NOW()
  )
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  about = EXCLUDED.about,
  updated_at = NOW();

-- Step 3: Insert demo events
INSERT INTO public.events (
  id, name, theme, start_datetime, end_datetime,
  estimated_participants, estimated_budget,
  event_type, status, hosted, club_id,
  venue, city, country, event_blueprint,
  additional_details, banners, created_at, updated_at
)
VALUES
  (
    'e1000000-0000-4000-a000-000000000001',
    'HackFest 2025',
    'Innovation & Technology',
    '2025-09-15 09:00:00+05:30',
    '2025-09-16 18:00:00+05:30',
    200,
    50000,
    'free',
    'approved',
    'self',
    '0dff3d4e-79b9-5d5b-acd7-69ee314b1fd6',
    'MLR Institute of Technology, Main Auditorium',
    'Hyderabad',
    'India',
    'https://hxcygmrgqrfjoggeuwnw.supabase.co/storage/v1/object/public/event-blueprints/demo_blueprint.pdf',
    '24-hour hackathon open to all students. Build innovative solutions for real-world problems.',
    '{"16:9": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1280&q=80", "1x1": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80"}',
    NOW(),
    NOW()
  ),
  (
    'e1000000-0000-4000-a000-000000000002',
    'AI Workshop Series',
    'Artificial Intelligence & Machine Learning',
    '2025-10-05 10:00:00+05:30',
    '2025-10-05 17:00:00+05:30',
    100,
    15000,
    'free',
    'approved',
    'self',
    '0dff3d4e-79b9-5d5b-acd7-69ee314b1fd6',
    'MLR Institute of Technology, Seminar Hall',
    'Hyderabad',
    'India',
    'https://hxcygmrgqrfjoggeuwnw.supabase.co/storage/v1/object/public/event-blueprints/demo_blueprint.pdf',
    'A hands-on workshop series covering Machine Learning, Deep Learning, and Generative AI fundamentals.',
    '{"16:9": "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1280&q=80", "1x1": "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80"}',
    NOW(),
    NOW()
  ),
  (
    'e1000000-0000-4000-a000-000000000003',
    'Web Development Bootcamp',
    'Full Stack Development',
    '2025-11-10 09:00:00+05:30',
    '2025-11-12 17:00:00+05:30',
    80,
    20000,
    'paid',
    'approved',
    'self',
    '104ad68b-1cf2-5c0c-bd1f-78e5b49eb9ec',
    'MLR Institute of Technology, Lab Block 3',
    'Hyderabad',
    'India',
    'https://hxcygmrgqrfjoggeuwnw.supabase.co/storage/v1/object/public/event-blueprints/demo_blueprint.pdf',
    'A 3-day intensive bootcamp covering React, Next.js, Node.js, and cloud deployment.',
    '{"16:9": "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=1280&q=80", "1x1": "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=600&q=80"}',
    NOW(),
    NOW()
  ),
  (
    'e1000000-0000-4000-a000-000000000004',
    'IIC Speaker Series: Startup Ecosystem',
    'Entrepreneurship',
    '2025-08-20 11:00:00+05:30',
    '2025-08-20 14:00:00+05:30',
    300,
    10000,
    'free',
    'approved',
    'iic',
    '0dff3d4e-79b9-5d5b-acd7-69ee314b1fd6',
    'MLR Institute of Technology, Seminar Hall',
    'Hyderabad',
    'India',
    'https://hxcygmrgqrfjoggeuwnw.supabase.co/storage/v1/object/public/event-blueprints/demo_blueprint.pdf',
    'Industry leaders share insights on building successful startups in India.',
    '{"16:9": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1280&q=80", "1x1": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80"}',
    NOW(),
    NOW()
  ),
  (
    'e1000000-0000-4000-a000-000000000005',
    'Cybersecurity Summit',
    'Information Security',
    '2025-12-01 09:00:00+05:30',
    '2025-12-01 18:00:00+05:30',
    150,
    30000,
    'free',
    'pending_approval',
    'self',
    '104ad68b-1cf2-5c0c-bd1f-78e5b49eb9ec',
    'MLR Institute of Technology, Conference Hall',
    'Hyderabad',
    'India',
    'https://hxcygmrgqrfjoggeuwnw.supabase.co/storage/v1/object/public/event-blueprints/demo_blueprint.pdf',
    'A summit bringing together security experts to discuss modern threats and defense strategies.',
    '{"16:9": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1280&q=80", "1x1": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80"}',
    NOW(),
    NOW()
  )
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  banners = EXCLUDED.banners,
  updated_at = NOW();

-- Step 4: Insert student council members
INSERT INTO public.student_council (id, club_id, role, name, email, discipline, semester, stream, year, association_with)
VALUES
  (
    'sc000001-0000-4000-a000-000000000001',
    '0dff3d4e-79b9-5d5b-acd7-69ee314b1fd6',
    'President',
    'Arjun Patel',
    'arjun.patel@mlrit.ac.in',
    'Computer Science',
    '6',
    'B.Tech',
    3,
    'IIC'
  ),
  (
    'sc000001-0000-4000-a000-000000000002',
    '0dff3d4e-79b9-5d5b-acd7-69ee314b1fd6',
    'Vice President',
    'Priya Sharma',
    'priya.sharma@mlrit.ac.in',
    'Information Technology',
    '4',
    'B.Tech',
    2,
    'IIC'
  ),
  (
    'sc000001-0000-4000-a000-000000000003',
    '0dff3d4e-79b9-5d5b-acd7-69ee314b1fd6',
    'Technical Lead',
    'Ravi Kiran',
    'ravi.kiran@mlrit.ac.in',
    'Computer Science',
    '8',
    'B.Tech',
    4,
    'MLRIT'
  ),
  (
    'sc000001-0000-4000-a000-000000000004',
    '104ad68b-1cf2-5c0c-bd1f-78e5b49eb9ec',
    'President',
    'Sneha Reddy',
    'sneha.reddy@mlrit.ac.in',
    'Electronics & Communication',
    '6',
    'B.Tech',
    3,
    'IIC'
  )
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  role = EXCLUDED.role;

-- Step 5: Insert faculty council members
INSERT INTO public.faculty_council (id, club_id, role, name, phone, email, department, designation, qualification, experience)
VALUES
  (
    'fc000001-0000-4000-a000-000000000001',
    '0dff3d4e-79b9-5d5b-acd7-69ee314b1fd6',
    'Faculty Coordinator',
    'Dr. Ramesh Kumar',
    '9876543210',
    'ramesh.kumar@mlrit.ac.in',
    'Computer Science & Engineering',
    'Associate Professor',
    'Ph.D. (Computer Science)',
    12
  ),
  (
    'fc000001-0000-4000-a000-000000000001',
    '0dff3d4e-79b9-5d5b-acd7-69ee314b1fd6',
    'Faculty Advisor',
    'Dr. Lakshmi Prasad',
    '9876543211',
    'lakshmi.prasad@mlrit.ac.in',
    'Information Technology',
    'Professor',
    'Ph.D. (IT)',
    18
  ),
  (
    'fc000001-0000-4000-a000-000000000003',
    '104ad68b-1cf2-5c0c-bd1f-78e5b49eb9ec',
    'Faculty Coordinator',
    'Prof. Sunita Sharma',
    '9876543212',
    'sunita.sharma@mlrit.ac.in',
    'Information Technology',
    'Assistant Professor',
    'M.Tech (Software Engineering)',
    7
  )
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  role = EXCLUDED.role;

-- Step 6: Insert event tickets for the Web Dev Bootcamp (paid event)
INSERT INTO public.event_tickets (id, event_id, name, class, price, inclusions, available, created_at, updated_at)
VALUES
  (
    'tk000001-0000-4000-a000-000000000001',
    'e1000000-0000-4000-a000-000000000003',
    'General Pass',
    'general',
    499,
    ARRAY['3-day access', 'Certificate of completion', 'Lunch included'],
    50,
    NOW(),
    NOW()
  ),
  (
    'tk000001-0000-4000-a000-000000000002',
    'e1000000-0000-4000-a000-000000000003',
    'VIP Pass',
    'vip',
    999,
    ARRAY['3-day access', 'Certificate of completion', 'Lunch included', 'Workshop kit', 'Networking dinner'],
    20,
    NOW(),
    NOW()
  )
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  price = EXCLUDED.price;

-- Step 7: Insert event coupons
INSERT INTO public.event_coupons (id, event_id, code, discount, type, max_uses, active, created_at, updated_at)
VALUES
  (
    'cp000001-0000-4000-a000-000000000001',
    'e1000000-0000-4000-a000-000000000003',
    'DEMO20',
    20,
    'percentage',
    50,
    true,
    NOW(),
    NOW()
  ),
  (
    'cp000001-0000-4000-a000-000000000002',
    'e1000000-0000-4000-a000-000000000003',
    'EARLY100',
    100,
    'fixed',
    10,
    true,
    NOW(),
    NOW()
  )
ON CONFLICT (id) DO UPDATE SET
  code = EXCLUDED.code,
  discount = EXCLUDED.discount;

-- Done!
SELECT 'Demo seed data inserted successfully!' as status;
