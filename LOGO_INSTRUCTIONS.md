# Logo Setup Instructions

## Adding Your Logo

1. **Place Logo File:**
   - Save your logo image as `logo.png`
   - Place it in the `public/` folder
   - Recommended size: 48x48 pixels or higher (will be scaled)

2. **Logo Format:**
   - PNG format (recommended)
   - Transparent background preferred
   - High resolution for best quality

3. **File Location:**
   ```
   public/logo.png
   ```

4. **Automatic Fallback:**
   - If logo.png is not found, the system will automatically use an SVG icon
   - No action needed if logo is missing

5. **Update Logo:**
   - Simply replace `public/logo.png` with your new logo
   - The website will automatically use the new logo

---

## Current Logo Component

The logo component is located at:
- `components/Logo.tsx`

It automatically handles:
- Image loading
- Fallback to SVG if image not found
- Responsive sizing
- Proper alt text for accessibility

---

## Testing

After adding logo.png:
1. Restart development server
2. Check homepage and navbar
3. Logo should appear automatically

