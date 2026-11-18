# Image & Asset Optimization Rule

Whenever any image, photo, logo, or icon is added, uploaded, edited, or received:
1. **Mandatory Automatic Compression**: Run `npm run optimize` (or `python3 scripts/optimize-assets.py`).
2. **People / Staff Photos**:
   - Must be resized to maximum 650px height.
   - Must generate modern WebP companion with target size under 40 KB.
   - PNG fallback must be color-quantized to stay under 170 KB.
3. **Logos and Brand Graphics**:
   - Must be cropped tightly (no empty transparent bounding box padding).
   - Must generate WebP companion under 15 KB.
4. **Dual Format In HTML**:
   - Always load images using `<picture>` elements:
     ```html
     <picture>
       <source srcset="images/photo.webp" type="image/webp">
       <img src="images/photo.png" alt="..." loading="eager" decoding="async">
     </picture>
     ```
