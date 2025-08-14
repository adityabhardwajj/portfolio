# ShutterTrail Portfolio - Aditya Bhardwaj

A modern, interactive portfolio website featuring the innovative **ShutterTrail** cursor effect that combines technology, travel, and photography into a single elegant motion experience.

## 🌟 ShutterTrail Cursor Effect

The ShutterTrail cursor is the heart of this portfolio, representing the fusion of Aditya's passions:

### ✨ Core Features
- **Camera Aperture Icon**: Minimal, glowing 6-blade aperture that rotates continuously
- **Color-Shifting Trails**: Smooth trails transitioning through travel-inspired colors:
  - Warm sunset oranges (#ff6b35, #f39c12)
  - Cool mountain blues (#4ecdc4, #1abc9c)
  - Deep night purples (#9b59b6)
  - Vibrant accents (#e74c3c)
- **AI-Inspired Predictive Motion**: Smart cursor that anticipates movement direction
- **Particle Effects**: Bokeh lights and photo frame outlines that emerge and fade
- **Click Interactions**: Soft ripple effects resembling camera flash/lens focus

### 🎮 Interactive Controls
- **1, 2, 3**: Adjust trail length (10, 20, 30 points)
- **V**: Toggle cursor visibility
- **P**: Toggle particle density
- **Debug Mode**: Add `?debug` to URL for performance monitoring

### 🚀 Performance Features
- Optimized for 60fps smooth animation
- Canvas-based rendering for efficiency
- Visibility-based performance optimization
- Responsive to system performance

## 🏗️ Portfolio Structure

### 📱 Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions
- Dark/light theme support

### 🎨 Sections
1. **Hero**: Animated title with floating elements
2. **About**: Personal story with animated statistics
3. **Photography**: Interactive photo grid with frame effects
4. **Projects**: Technical projects with hover animations
5. **Contact**: Form with floating labels and feedback

### 🔧 Technical Features
- Smooth scrolling navigation
- Parallax effects on floating elements
- Intersection Observer for scroll animations
- Form handling with visual feedback
- Easter egg (Konami code: ↑↑↓↓←→←→BA)

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Animations**: CSS animations + Canvas API
- **Performance**: RequestAnimationFrame, optimized rendering
- **Responsiveness**: CSS Grid, Flexbox, Media Queries
- **Accessibility**: Semantic HTML, ARIA support

## 🚀 Getting Started

1. **Clone/Download** the project files
2. **Open** `index.html` in a modern web browser
3. **Experience** the ShutterTrail cursor effect
4. **Customize** by modifying the configuration in `cursor.js`

### Browser Requirements
- Modern browsers with ES6+ support
- Canvas API support
- CSS Grid and Flexbox support

## 🎯 Customization

### Cursor Effects
```javascript
// Adjust trail properties
shutterTrail.setTrailLength(25);    // Trail length
shutterTrail.setTrailOpacity(0.9);  // Trail opacity
shutterTrail.setParticleCount(20);  // Particle count
```

### Color Palette
Modify the `colors` array in `cursor.js` to change the trail color scheme:
```javascript
this.colors = [
    '#ff6b35', // Your custom colors
    '#your-color-1',
    '#your-color-2'
];
```

### Performance Tuning
```javascript
// Adjust for different devices
this.trailLength = 15;        // Shorter for mobile
this.maxParticles = 10;       // Fewer particles
this.smoothingFactor = 0.2;   // More responsive
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🌍 Accessibility Features

- High contrast color schemes
- Keyboard navigation support
- Screen reader friendly
- Reduced motion support
- Focus indicators

## 🔍 Performance Monitoring

Enable debug mode by adding `?debug` to the URL to see:
- Real-time FPS monitoring
- Performance metrics
- Console logging for debugging

## 🎨 Brand Identity

**ShutterTrail** represents the journey of a photographer who captures moments through both lens and code. The name combines:
- **Shutter**: Photography and capturing moments
- **Trail**: Travel, journeys, and the paths we take
- **Technology**: Modern web development and innovation

## 📸 Photography Integration

The portfolio showcases Aditya's photography journey:
- Landscape photography (mountain peaks)
- Cultural heritage documentation
- Urban life and street photography
- Natural beauty and environmental shots

## 💻 Technical Projects

Featured projects demonstrate the intersection of technology and creativity:
- AI Image Recognition for travel photography
- Travel Companion mobile application
- Modern portfolio website development

## 🌟 Special Features

### Easter Egg
Enter the Konami code (↑↑↓↓←→←→BA) to activate a special rainbow effect and reveal a hidden message about the portfolio's philosophy.

### Interactive Elements
- Hover effects on all interactive components
- Smooth transitions and micro-animations
- Particle systems and visual feedback
- Dynamic color schemes

## 📄 License

This project is created for Aditya Bhardwaj's personal portfolio. Feel free to use the ShutterTrail cursor effect in your own projects with attribution.

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:
- Performance optimizations
- Additional cursor effects
- Accessibility improvements
- Cross-browser compatibility

## 📞 Contact

For questions about the ShutterTrail effect or portfolio implementation:
- **Portfolio**: [Your Portfolio URL]
- **Email**: [Your Email]
- **Location**: Jammu & Kashmir, India

---

**ShutterTrail**: Where technology meets creativity, and every cursor movement tells a story of innovation and passion.

*Built with ❤️ for the photography and development community*
