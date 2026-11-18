# Antigravity Project Instructions

## Image & Asset Optimization Guidelines
- Every time any asset is added, uploaded, or modified in `images/`, `public/images/`, `Travelport/images/`, `GulfIndianSchool/images/`, `staff/images/`, or `onflap/images/`, you MUST ensure that size reduction is executed via `npm run optimize`.
- People's portrait photos must always be compressed to WebP (~15-35 KB) and optimized PNG (~150 KB) with max height 650px.
- Brand logos must be under 15 KB.
- Always provide WebP + PNG picture tags for instant NFC card tap loading.

## Global Multilingual & Contact Page Standards (For All Pages & Future Clients)
- **Default Language:** All pages must always load in **English by default**. Do not use `navigator.language` or persistent `localStorage` to automatically flip to Arabic.
- **Explicit Arabic Toggle Only:** Language changes to Arabic **only** when the user explicitly clicks the Arabic toggle button (`#langToggleBtn`). Clicking it again switches smoothly back to English.
- **Clean Profile Header:**
  - Name (`#profileName`) and Designation (`#profileTitle`) must **never** contain dual subtitles in the other language stacked under them in static HTML.
  - When switching languages, the text directly swaps to Arabic or English cleanly without redundant stacked subtitles.
- **Qubytz Card Customization Banner:**
  - Every card banner (`.qubytz-card-cta`) must include the `.qubytz-cta-text` span.
  - When toggling to Arabic, the CTA banner must dynamically update to:
    `قم بتخصيص بطاقة NFC الخاصة بك مع كيوبيتز اليوم`
    and switch back to:
    `Customize your NFC Card with Qubytz Today`
- **Responsive Layout & Photo Shape:**
  - **Laptop/Desktop View (`> 900px`):** Profile portrait should use the rounded card silhouette (`border-radius: 32px`, `aspect-ratio: 3/4`).
  - **Mobile View (`<= 900px`):** Profile portrait must transform into a centered circle (`border-radius: 50%`, `aspect-ratio: 1/1`), and the entire card layout must fit on a single screen without awkward scrolling, matching Ambikadevi's compact arrangement.
  - Action buttons (`.actions`) in mobile must be side-by-side (`flex-direction: row; gap: 0.5rem;`) with `white-space: nowrap; overflow: hidden; text-overflow: ellipsis; min-width: 0; flex: 1;` so buttons never overlap or break.
- **Location & Phone Number Standards:**
  - When toggling to Arabic, the location text switches to the localized Arabic address (e.g. `مؤسسة الفيصل التعليمية، دولة الكويت`, `مدرسة نيو جلف الهندية، شارع 114، المهبولة، دولة الكويت`, etc.).
  - Contact phone numbers remain in standard English/international numerals (`+965 XXXX XXXX`, `dir="ltr"`) across both English and Arabic modes for clean, universal legibility and dialing compatibility.
