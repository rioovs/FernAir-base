```markdown
# Design System Document: Atmospheric Precision

## 1. Overview & Creative North Star
This design system moves away from the "commodity" look of the HVAC industry—which often relies on heavy borders and clashing primaries—and instead embraces **"Atmospheric Precision."** 

Our Creative North Star is defined by clarity, technical authority, and the feeling of a controlled environment. We break the traditional "contractor template" by utilizing high-end editorial layouts: intentional asymmetry, dramatic typography scales, and layered surfaces. We treat white space as "airflow," ensuring the interface feels as breathable and premium as the air quality FernAir provides.

## 2. Colors & Surface Philosophy
The palette is rooted in deep, trust-building blues (`primary`) and surgical whites, punctuated by a high-heat orange-red (`tertiary`) for urgent actions.

### The "No-Line" Rule
To maintain a high-end editorial feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries between content blocks must be defined through background color shifts or tonal transitions.
*   **Implementation:** Use `surface-container-low` to define a background area, then place `surface-container-lowest` cards on top. The eye should perceive the edge through the shift in value, not a line.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of materials.
*   **Base:** `surface` (#f9f9fd)
*   **Structural Sections:** `surface-container-low` (#f3f3f7) or `surface-container` (#ededf1).
*   **Interactive Cards:** `surface-container-lowest` (#ffffff) to provide "lift" against the darker background.

### The "Glass & Gradient" Rule
To avoid a flat, "out-of-the-box" appearance:
*   **Glassmorphism:** For sticky headers and floating emergency badges, use `surface` colors with 80% opacity and a `20px` backdrop blur. This allows the brand blues to bleed through subtly.
*   **Signature Textures:** For Hero sections and primary CTAs, use a subtle linear gradient transitioning from `primary` (#006191) to `primary_container` (#007bb7) at a 135-degree angle. This adds "soul" and dimension.

## 3. Typography
We use **Inter** across the board, relying on extreme weight and size contrast to establish an editorial hierarchy.

*   **Display Scale (`display-lg` to `display-sm`):** Reserved for high-impact brand promises (e.g., "Perfect Climate, Guaranteed."). Set these with tight letter-spacing (-0.02em) to feel "engineered."
*   **Headline & Title:** Use `headline-lg` for service titles. Pair these with `label-md` in all-caps for "Overlines" (e.g., DUCTED SYSTEMS) to create a sophisticated, magazine-style rhythm.
*   **Body:** `body-lg` is the standard for readability. Use `on_surface_variant` (#3f4850) for secondary descriptions to reduce visual noise.

## 4. Elevation & Depth
Hierarchy is achieved through **Tonal Layering** rather than structural shadows.

*   **The Layering Principle:** Depth is a result of stacking. A `surface-container-lowest` card placed on a `surface-container-high` section creates an immediate, soft focal point.
*   **Ambient Shadows:** For floating elements (like the Emergency Badge), use a diffuse shadow: `offset: 0 12px`, `blur: 32px`, `color: alpha(on_surface, 0.06)`. It should feel like a soft glow, not a dark drop-shadow.
*   **The "Ghost Border" Fallback:** If accessibility requires a container edge, use a "Ghost Border": `outline-variant` at 15% opacity. Never use 100% opaque borders.

## 5. Components

### Service & Testimonial Cards
*   **Layout:** Remove all borders. Use `surface-container-lowest` on a `surface-container-low` background.
*   **Spacing:** Increase padding to `xl` (1.5rem to 2rem) to allow content to breathe.
*   **Testimonials:** Use an asymmetrical layout where the customer's name (`title-sm`) and the service type (`label-sm`) are separated by a wide horizontal gap.

### Trust & Emergency Badges
*   **Trust Badges (Actron Platinum Plus, etc.):** Treat these as "Certified Artifacts." Place them in a monochrome `surface-container-high` strip to ensure they don't visually compete with the primary FernAir branding.
*   **Emergency Badges (24/7):** Use `tertiary` (#a43700) text on a glass-morphic background. This signals urgency without feeling "cheap."

### Form Elements
*   **Inputs:** Use `surface-container-highest` for the input field background. The active state should not use a thick border but a `2px` bottom stroke of `primary` (#006191).
*   **Error States:** Use `error` (#ba1a1a) for helper text and `error_container` as a subtle background wash for the input field itself.

### Buttons
*   **Primary CTA:** Use the signature gradient (Primary to Primary-Container). Roundedness should be `md` (0.375rem).
*   **Secondary/Urgent CTA:** Use `tertiary` (#a43700). Reserve this strictly for "Book Emergency Repair."
*   **Tertiary:** No background; use `on_surface` text with an `outline-variant` Ghost Border.

### Sticky Mobile Header
*   **Style:** `surface-container-lowest` at 85% opacity with a heavy backdrop-blur. 
*   **Layout:** A centered Logo with a floating "Call Now" `tertiary` icon-button on the right, ensuring the primary conversion path is always within thumb-reach.

## 6. Do's and Don'ts

### Do:
*   **Do** use `surface` shifts to separate the Hero from the Service Grid.
*   **Do** use `display-lg` typography for single-sentence impact statements.
*   **Do** use high-contrast imagery of local Newcastle/Hunter Valley landscapes or crisp, technical HVAC installs.

### Don't:
*   **Don't** use 1px solid borders to wrap cards or sections.
*   **Don't** use standard "Drop Shadows" (Black at 25% opacity).
*   **Don't** use the `tertiary` orange/red color for anything other than high-urgency CTAs or Emergency indicators.
*   **Don't** crowd the layout. If in doubt, add more vertical padding.```