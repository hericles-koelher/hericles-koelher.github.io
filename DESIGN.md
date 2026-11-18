# Design system

This document describes the visual baseline for this site and a starting point for future page experiments. It is based on the project's current implementation in `src/styles/global.css`, and uses the token-first structure of [Awesome DESIGN.md](https://github.com/VoltAgent/awesome-design-md) as a reference. It does not reproduce any one brand's identity.

When this project is used to prototype a page for a different client, keep the layout and component lessons that fit, then define that client's own colors, typography, imagery, and tone. Do not carry over Hericles Koelher's name, copy, portrait, contact details, or purple palette by default.

## Visual direction

A dark, calm, developer-led canvas with a vivid lavender accent. Use clear hierarchy, generous spacing, readable copy, and a small number of strong calls to action. Alternate dark sections with light surfaces when it improves scanning.

## Color palette

| Token | Value | Role |
| --- | --- | --- |
| `ink` | `#151725` | Text on light surfaces |
| `night` | `#11131d` | Main dark canvas |
| `paper` | `#f7f7fa` | Light section background |
| `lavender` | `#b994ff` | Brand accent, emphasis, and links on dark |
| `action` | `#6940d8` | Primary action |
| `focus` | `#9668ff` | Visible keyboard focus |
| `muted-dark` | `#c9c9d9` | Supporting text on dark |
| `muted-light` | `#42455a` | Supporting text on light |

Use the accent sparingly for key words, links, and small markers. Keep body text high contrast against its surface. Check contrast whenever a token or surface changes.

## Typography

- Use DM Sans Variable, with a system sans-serif fallback.
- Headlines use weight 800 and tight tracking; keep line lengths short and wrap headings deliberately.
- Body copy uses a comfortable 1.5–1.65 line height. Prioritize clear, direct language over decorative labels.
- Eyebrows are small uppercase labels with expanded tracking. Use them only to orient, not as a replacement for a heading.

## Layout and spacing

- Center content in a shell with a maximum width of 86rem.
- Use 1.5rem desktop side gutters and 1rem gutters on small screens.
- Build sections around one clear message. Use a two-column layout for hero and about content; use grids for services and benefits.
- On narrow screens, stack grids into one column and keep navigation and actions easy to tap.
- Use responsive spacing and type sizes with `clamp()` instead of abrupt jumps.

## Components

- **Header:** dark surface, subtle bottom border, wordmark at left, section navigation, and one contact action.
- **Buttons:** rounded corners around 0.7rem, bold labels, and clear primary versus outline treatments. Make the label describe the action.
- **Cards:** white/light cards on light sections with a fine border, modest radius, and restrained shadow. Avoid adding cards when a simple text list is clearer.
- **Sections:** combine dark and light backgrounds to mark changes in content. Keep gradients subtle and limited to the hero or contact panel.
- **Imagery:** use real, relevant photographs with intentional crops. Add no image only as decoration; every image should support the page's purpose.

## Interaction and accessibility

- Show a visible focus ring for keyboard users.
- Preserve semantic landmarks, heading order, descriptive link text, and useful image alt text.
- Keep touch targets comfortable on mobile.
- Use small hover changes for interactive elements. Respect `prefers-reduced-motion`; motion should never carry essential information.
- Test text and controls against their actual backgrounds after visual changes.

## Responsive checkpoints

Review at desktop, tablet, and mobile widths. At minimum, verify around 1440px, 768px, and 390px. Confirm that navigation wraps or stacks cleanly, headings do not overflow, images keep useful crops, and no horizontal scrolling is introduced.

## Reuse for future pages

1. Start from the project's Astro and Tailwind setup.
2. Identify the page audience, purpose, and main action before designing.
3. Keep this token set only when it suits that page. Otherwise, define a new semantic palette and type pairing here before implementing components.
4. Reuse layout and accessibility patterns, not client-specific content or assets.
5. Review the finished page at the responsive checkpoints above.
