# AAFN Store Frontend - Current State

## Brand Colors
- **Primary Red**: `#862d27` (carousel buttons, promotional banners)
- **Secondary Purple**: `#2d2651` (discount coupons, banner sections)

## Recent Changes

### 1. Carousel Design
- **File**: `src/components/carousel/MainCarousel.js`
- **Design**: Text overlay on images (not split-screen)
- **Timing**: 5s autoplay delay, 1s transition speed
- **Button Color**: Primary red (`bg-primary-600`)
- **Image Size**: Fixed 950x400px

### 2. Homepage Layout
- **File**: `src/pages/index.js`
- **Layout**: Side-by-side (carousel 60% left, OfferCard 40% right on desktop)
- **Banner Section**: Light purple background (`bg-secondary-200`)
- **Promotional Card**: Primary red background (`bg-primary-600`)

### 3. Discount Coupon Card
- **File**: `src/components/offer/OfferCard.js`
- **Border**: Purple (`border-secondary-300`)
- **Header**: Light purple background (`bg-secondary-200`)
- **Hover**: Purple border (`border-secondary-500`)

### 4. Color Scale (Tailwind Config)
```js
primary: {
  500: "#862d27", // Main red
  600: "#6b2420",
  700: "#501b18",
}

secondary: {
  100: "#f5f3f9", // Very light purple
  200: "#e3dff0", // Light purple
  300: "#a89fc9", // Medium light purple
  400: "#6d5f99", // Medium purple
  500: "#2d2651", // Main purple
  600: "#2d2651",
  700: "#241f41", // Darker purple
}
```

## Key Files Modified
- `src/components/carousel/MainCarousel.js`
- `src/pages/index.js`
- `src/components/offer/OfferCard.js`
- `tailwind.config.js`
- `src/styles/custom.css` (carousel navigation arrows)

## Reference Backup
Original code backup location: `/Users/maleo/Downloads/aafn-store-frontend-main`
