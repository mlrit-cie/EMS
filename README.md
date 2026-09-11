# Creative Canvas

I want you to redesign and rebuild my existing website using my existing Git repository as the source of truth for all project data, content, functionality, routes, and existing features.

REFERENCES

1. EXISTING GIT REPOSITORY — FUNCTIONALITY + CONTENT SOURCE

Use the Git repository/project already provided to you as the source of truth.

Before changing anything:

Inspect the entire existing project structure.

Identify the current routes/pages.

Identify existing components.

Identify existing project data.

Identify portfolio/project information.

Identify existing images, videos, icons, fonts, assets and media.

Identify existing animations and interactions that should be preserved.

Identify the current tech stack and reuse it wherever practical.

Do NOT replace working functionality unnecessarily.

Do NOT invent portfolio projects, experience, education, skills, or personal information if they already exist in the repository.

Preserve useful existing functionality while completely upgrading the visual presentation.

The repository's actual content and functionality should remain mine.

2. WEBSITE VISUAL REFERENCE

Use this website as the primary visual and interaction reference:

https://giolabs.lu/?ref=siteinspire#discover

Study its:

Overall visual language

Composition

Typography scale

Spacing

Grid system

Asymmetry

Full-screen sections

Navigation behavior

Image treatment

Project presentation

Scrolling behavior

Section transitions

Hover interactions

Cursor interactions

Visual hierarchy

Motion design

Responsive behavior

Pacing between sections

IMPORTANT:

Do not copy the GIOLABS branding, logo, text, images, illustrations, or proprietary assets.

Instead, understand WHY the website feels sophisticated and recreate those design principles using my own portfolio content and assets.

3. SCREENSHOTS

I am also providing screenshots of the reference website.

Treat the screenshots as the highest-priority visual reference for recreating the UI.

Analyze each screenshot carefully for:

Exact layout proportions

Element positioning

Margins and padding

Typography hierarchy

Font weight

Letter spacing

Line height

Image sizes

Image cropping

Grid proportions

Alignment

Negative space

Navigation placement

Button placement

Visual rhythm

Section height

Background treatment

Borders

Radius

Hover states where visible

Mobile/desktop differences

Do not simply create a generic portfolio inspired by the screenshots.

Reconstruct the underlying design system and layout logic.

DESIGN DIRECTION

The final website should feel like a high-end experimental creative studio / digital-art portfolio rather than a conventional developer portfolio.

Target feeling:

Minimal

Editorial

Experimental

Premium

Artistic

Highly intentional

Cinematic

Modern

Sophisticated

Slightly unconventional

Strong typography

Strong visual hierarchy

Lots of controlled negative space

Avoid:

Generic SaaS layouts

Generic hero sections

Standard centered portfolio cards

Excessive gradients

Neon colors

Excessive glassmorphism

Random glowing effects

Template-looking sections

Excessive rounded cards

Unnecessary UI decoration

Generic AI-generated website aesthetics

The design should feel designed by a professional digital art/creative agency.

MY CONTENT MUST CONTROL THE WEBSITE

Use the actual information and projects found in my repository.

For example, if the repository contains:

Projects

About

Skills

Education

Experience

Contact

GitHub projects

Project descriptions

Images

Videos

Links

use those actual values.

Do not replace them with placeholder content unless something is genuinely missing.

Do not fabricate information.

ANIMATION + INTERACTION

This is extremely important.

The website should not only LOOK similar to the reference.

It should FEEL interactive.

Implement sophisticated but performant motion using GSAP where appropriate.

Consider:

Smooth page entrance

Text reveal animations

Image reveal animations

Scroll-triggered transformations

Sticky/pinned sections

Horizontal scrolling sections

Parallax movement

Image scale transitions

Mask reveals

Clip-path transitions

Project hover transformations

Cursor interactions

Magnetic interactions where appropriate

Navigation transitions

Section-to-section transitions

Subtle velocity-based motion

Staggered element reveals

Smooth easing

Loading/intro sequence if appropriate

Animations should have intentional timing and choreography.

Do NOT animate everything.

Motion should create hierarchy and atmosphere.

Avoid excessive bouncing, spinning, glowing, or gimmicky animations.

TYPOGRAPHY

Typography is a major part of the design.

Use a strong modern editorial type system.

Create clear hierarchy between:

Massive display headings

Section headings

Project titles

Metadata

Body text

Navigation

Small labels

Pay close attention to:

Font size

Weight

Tracking

Line height

Text wrapping

Responsive typography

Large typography should sometimes interact with the viewport and composition rather than simply sitting inside a conventional container.

LAYOUT

Do not force everything into a standard centered max-width container.

Use a mixture of:

Full viewport sections

Asymmetric grids

Edge-aligned content

Large whitespace

Overlapping elements

Editorial columns

Variable image sizes

Horizontal compositions

Sticky elements

Full-bleed media

The composition should feel intentionally art-directed.

PROJECTS

Transform the existing projects from the repository into visually impressive case-study/project presentations.

Projects should feel like major visual pieces rather than simple cards.

Where appropriate:

Large project imagery

Full-screen project sections

Project metadata

Technology labels

Short descriptions

Interactive hover states

Scroll-based image transitions

Project previews

Links to live projects/GitHub

Use my existing project data.

RESPONSIVE DESIGN

The desktop experience is important, but do not simply shrink the desktop version.

Create a deliberate responsive experience for:

Desktop

Laptop

Tablet

Mobile

On mobile:

Recalculate typography

Recompose grids

Simplify complex interactions when necessary

Preserve the visual identity

Maintain smooth animations

Avoid horizontal overflow

Ensure touch interactions work properly

PERFORMANCE

The website should remain performant.

Important:

Lazy-load large images

Optimize media

Avoid unnecessary re-renders

Avoid excessive WebGL

Use GPU-friendly animations

Prefer transform/opacity animations

Respect prefers-reduced-motion

Do not add Three.js/WebGL simply because it looks cool

Only introduce Three.js/WebGL if it meaningfully contributes to the visual experience.

CODE QUALITY

Keep the implementation production-quality.

Reuse components

Keep components modular

Avoid duplicated code

Keep data separate from presentation where appropriate

Preserve existing functionality

Keep routing intact

Maintain accessibility

Maintain semantic HTML

Ensure keyboard navigation where applicable

Avoid unnecessary dependencies

Before finishing, check for:

Console errors

Broken routes

Broken images

Layout overflow

Mobile issues

Animation glitches

Performance problems

Missing assets

TypeScript errors

MOST IMPORTANT PRIORITY

Use these priorities when making decisions:

My Git repository → content, data, functionality and existing project structure

My supplied screenshots → exact visual composition and UI reference

GIOLABS website → interaction, motion, design language and overall creative direction

Professional UX/accessibility/performance → implementation quality

Do NOT make a generic "developer portfolio".

I want a highly art-directed, experimental, editorial portfolio that feels like a premium creative website while still clearly representing me as a CSE student, developer and designer.

First analyze the existing repository and all supplied visual references.

Then build the website systematically rather than generating every section as an unrelated template.

The final result should feel like one coherent visual experience from the first frame to the final section.

https://github.com/mlrit-cie/EMS.git
use the last image for the ui colour palette the main colour should second colour from left
i.e.,8338EC

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f81f7fd4-9e32-4ac7-aac7-f4ee3ab571cf).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
