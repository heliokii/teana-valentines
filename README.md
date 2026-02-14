
#  Happy Heart's Day, Teana

A beautiful, interactive Valentine's Day website built with React and Framer Motion, featuring stunning animations, hover effects, and romantic design elements.

![Valentine's Day Theme](https://img.shields.io/badge/theme-Valentine's%20Day-ff69b4)
![React](https://img.shields.io/badge/React-18.2.0-61dafb)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10.16.4-ff0055)

##  Features

### Interactive Components
- **Animated Hero Section**: Letter-by-letter reveal animation with pulsing heart
- **Floating Hearts Background**: Continuous animated hearts floating across the screen
- **Interactive Message Cards**: Three hover-responsive cards with glow effects and animations
- **Love Letter Envelopes**: Click-to-reveal envelope animations with personalized messages
- **Smooth Scroll Animations**: Elements animate as you scroll through the page

### Design Highlights
- **Romantic Color Palette**: Rose, blush, burgundy, and cream tones
- **Elegant Typography**: Playfair Display for headings, Cormorant Garamond for body text
- **Gradient Effects**: Beautiful gradients and backdrop blur for depth
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile
- **Performance Optimized**: CSS animations with smooth 60fps performance

### UX Patterns
- **Staggered Animations**: Sequential reveals for engaging user experience
- **Hover Effects**: Interactive cards that respond to mouse movement
- **Click Interactions**: Envelope opening animations on tap/click
- **Visual Feedback**: Smooth transitions and micro-interactions throughout
- **Accessibility**: Semantic HTML and keyboard-friendly interactions

##  Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   cd valentines-teana
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - The app will automatically open at `http://localhost:3000`
   - If not, manually navigate to the URL shown in your terminal

### Build for Production

To create an optimized production build:

```bash
npm run build
```

The build files will be in the `dist` folder.

To preview the production build locally:

```bash
npm run preview
```

##  Project Structure

```
valentines-teana/
├── index.html                 # HTML entry point
├── package.json              # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── README.md                # This file
└── src/
    ├── main.jsx             # React entry point
    ├── App.jsx              # Main app component
    ├── styles/
    │   ├── global.css       # Global styles and CSS variables
    │   └── App.css          # App-specific styles
    └── components/
        ├── Hero.jsx         # Main hero section with animated title
        ├── Hero.css
        ├── FloatingHearts.jsx    # Background floating hearts
        ├── FloatingHearts.css
        ├── InteractiveMessage.jsx # Three interactive cards
        ├── InteractiveMessage.css
        ├── LoveLetters.jsx       # Envelope animations
        ├── LoveLetters.css
        ├── Footer.jsx            # Footer section
        └── Footer.css
```

##  Customization

### Colors
Edit the CSS variables in `src/styles/global.css`:

```css
:root {
  --rose-petal: #FF6B9D;
  --deep-rose: #C73866;
  --blush: #FFB5C5;
  --cream: #FFF5F7;
  --burgundy: #8B1E3F;
  --gold: #E8B4B8;
}
```

### Messages
Modify the content in the component files:

- **Hero message**: `src/components/Hero.jsx` (line 42)
- **Interactive cards**: `src/components/InteractiveMessage.jsx` (lines 10-26)
- **Love letters**: `src/components/LoveLetters.jsx` (lines 8-24)

### Animations
Adjust animation timings in the component files:
- Look for `transition` objects in motion components
- Modify `duration`, `delay`, and `ease` values

##  Technologies Used

- **React 18.2**: UI library
- **Framer Motion 10.16**: Animation library
- **Vite 5.0**: Build tool and dev server
- **CSS3**: Styling with modern features (gradients, backdrop-filter, animations)
- **Google Fonts**: Playfair Display and Cormorant Garamond

##  Interactive Elements

1. **Hero Section**
   - Animated letter-by-letter text reveal
   - Pulsing heart icon
   - Scroll hint with bounce animation

2. **Message Cards**
   - Hover to see glow effects
   - Scale and rotation on hover
   - Emoji animations

3. **Love Letter Envelopes**
   - Click to open/close envelope
   - Smooth content reveal animation
   - Pulsing heart signature

4. **Background Effects**
   - Continuous floating hearts
   - Gradient mesh backgrounds
   - Decorative rose elements

## Responsive Breakpoints

- **Desktop**: 1200px and above (optimal viewing)
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## Animation Details

- **Page Load**: Staggered animations for smooth entrance
- **Scroll Triggers**: Elements animate when they enter viewport
- **Hover Effects**: Interactive feedback on cards and envelopes
- **Continuous**: Floating hearts and pulsing elements

## Tips for Best Experience

- View on a larger screen for the full visual impact
- Hover over interactive elements to see animations
- Click on the envelope cards to reveal messages
- Scroll slowly to enjoy the scroll-triggered animations

## Troubleshooting

**Issue**: Animations not working
- **Solution**: Clear browser cache and hard refresh (Ctrl+Shift+R)

**Issue**: Port 3000 already in use
- **Solution**: Edit `vite.config.js` to use a different port

**Issue**: Fonts not loading
- **Solution**: Check your internet connection (Google Fonts requires internet)

## License

This project is created with love for personal use. Feel free to customize and share!

## About

Created as a special Valentine's Day gift, this website combines modern web technologies with romantic design to create a memorable digital experience. Every animation, color choice, and interaction has been carefully crafted to convey love and appreciation.

---

**Made with ❤️ for Teana**

*Happy Valentine's Day! 💖*
=======
# teana-valentines
A website for my beloved.
>>>>>>> 2f2bd23ed7cdca90796b64d12c1e28ae271f8058
