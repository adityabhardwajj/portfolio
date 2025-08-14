/**
 * ShutterTrail Cursor Effect
 * A sophisticated cursor animation combining technology, travel, and photography
 * Branded as 'ShutterTrail' for Aditya Bhardwaj's portfolio
 */

class ShutterTrailCursor {
    constructor() {
        this.canvas = document.getElementById('trail-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.cursor = document.querySelector('.cursor-core');
        
        // Cursor state
        this.mouse = { x: 0, y: 0 };
        this.cursorPos = { x: 0, y: 0 };
        this.velocity = { x: 0, y: 0 };
        this.acceleration = { x: 0, y: 0 };
        
        // Trail configuration
        this.trailLength = 20;
        this.trailPoints = [];
        this.trailOpacity = 0.8;
        this.trailWidth = 3;
        
        // Particle system
        this.particles = [];
        this.maxParticles = 15;
        this.particleLifetime = 60;
        
        // Performance optimization
        this.lastTime = 0;
        this.frameCount = 0;
        this.isVisible = true;
        
        // AI-inspired predictive motion
        this.predictionStrength = 0.3;
        this.smoothingFactor = 0.15;
        
        // Color palette for travel diversity
        this.colors = [
            '#ff6b35', // Warm sunset orange
            '#f39c12', // Golden yellow
            '#4ecdc4', // Cool mountain blue
            '#1abc9c', // Teal
            '#9b59b6', // Deep night purple
            '#e74c3c'  // Vibrant red
        ];
        
        this.init();
    }
    
    init() {
        this.resizeCanvas();
        this.bindEvents();
        this.animate();
        
        // Initialize trail with current mouse position
        for (let i = 0; i < this.trailLength; i++) {
            this.trailPoints.push({
                x: this.mouse.x,
                y: this.mouse.y,
                color: this.getRandomColor(),
                opacity: 1 - (i / this.trailLength),
                width: this.trailWidth * (1 - i / this.trailLength)
            });
        }
    }
    
    bindEvents() {
        // Mouse movement
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
            
            // Calculate velocity and acceleration for predictive motion
            this.velocity.x = this.mouse.x - this.cursorPos.x;
            this.velocity.y = this.mouse.y - this.cursorPos.y;
            
            this.acceleration.x = this.velocity.x - this.acceleration.x;
            this.acceleration.y = this.velocity.y - this.acceleration.y;
        });
        
        // Mouse click effects
        document.addEventListener('click', (e) => {
            this.createClickEffect(e.clientX, e.clientY);
            this.createParticleBurst(e.clientX, e.clientY);
        });
        
        // Window resize
        window.addEventListener('resize', () => {
            this.resizeCanvas();
        });
        
        // Visibility change for performance
        document.addEventListener('visibilitychange', () => {
            this.isVisible = !document.hidden;
        });
        
        // Mouse enter/leave
        document.addEventListener('mouseenter', () => {
            this.cursor.style.opacity = '1';
        });
        
        document.addEventListener('mouseleave', () => {
            this.cursor.style.opacity = '0';
        });
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    animate() {
        if (!this.isVisible) {
            requestAnimationFrame(() => this.animate());
            return;
        }
        
        const currentTime = performance.now();
        const deltaTime = currentTime - this.lastTime;
        this.lastTime = currentTime;
        
        this.updateCursor();
        this.updateTrail();
        this.updateParticles();
        this.render();
        
        this.frameCount++;
        requestAnimationFrame(() => this.animate());
    }
    
    updateCursor() {
        // Smooth cursor movement with AI-inspired prediction
        const targetX = this.mouse.x + this.velocity.x * this.predictionStrength;
        const targetY = this.mouse.y + this.velocity.y * this.predictionStrength;
        
        this.cursorPos.x += (targetX - this.cursorPos.x) * this.smoothingFactor;
        this.cursorPos.y += (targetY - this.cursorPos.y) * this.smoothingFactor;
        
        // Update cursor position
        this.cursor.style.transform = `translate(${this.cursorPos.x - 10}px, ${this.cursorPos.y - 10}px)`;
        
        // Add subtle rotation based on movement
        const rotation = Math.atan2(this.velocity.y, this.velocity.x) * (180 / Math.PI);
        this.cursor.style.transform += ` rotate(${rotation * 0.1}deg)`;
    }
    
    updateTrail() {
        // Add new trail point
        this.trailPoints.unshift({
            x: this.cursorPos.x,
            y: this.cursorPos.y,
            color: this.getRandomColor(),
            opacity: this.trailOpacity,
            width: this.trailWidth
        });
        
        // Remove old trail points
        if (this.trailPoints.length > this.trailLength) {
            this.trailPoints.pop();
        }
        
        // Update existing trail points
        this.trailPoints.forEach((point, index) => {
            point.opacity = this.trailOpacity * (1 - index / this.trailLength);
            point.width = this.trailWidth * (1 - index / this.trailLength);
            
            // Add subtle movement to trail points
            if (index > 0) {
                const prevPoint = this.trailPoints[index - 1];
                point.x += (prevPoint.x - point.x) * 0.1;
                point.y += (prevPoint.y - point.y) * 0.1;
            }
        });
    }
    
    updateParticles() {
        // Update existing particles
        this.particles = this.particles.filter(particle => {
            particle.life--;
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.opacity = particle.life / this.particleLifetime;
            particle.scale = 0.5 + (particle.life / this.particleLifetime) * 0.5;
            
            return particle.life > 0;
        });
        
        // Randomly spawn new particles
        if (this.particles.length < this.maxParticles && Math.random() < 0.1) {
            this.spawnRandomParticle();
        }
    }
    
    spawnRandomParticle() {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2 + 1;
        
        this.particles.push({
            x: this.cursorPos.x + (Math.random() - 0.5) * 20,
            y: this.cursorPos.y + (Math.random() - 0.5) * 20,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            color: this.getRandomColor(),
            life: this.particleLifetime,
            opacity: 1,
            scale: 1,
            type: Math.random() < 0.5 ? 'bokeh' : 'frame'
        });
    }
    
    render() {
        // Clear canvas with fade effect
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Render trail
        this.renderTrail();
        
        // Render particles
        this.renderParticles();
    }
    
    renderTrail() {
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        
        for (let i = 0; i < this.trailPoints.length - 1; i++) {
            const current = this.trailPoints[i];
            const next = this.trailPoints[i + 1];
            
            if (next) {
                this.ctx.beginPath();
                this.ctx.moveTo(current.x, current.y);
                this.ctx.lineTo(next.x, next.y);
                
                // Create gradient effect
                const gradient = this.ctx.createLinearGradient(
                    current.x, current.y, next.x, next.y
                );
                gradient.addColorStop(0, `${current.color}${Math.floor(current.opacity * 255).toString(16).padStart(2, '0')}`);
                gradient.addColorStop(1, `${next.color}${Math.floor(next.opacity * 255).toString(16).padStart(2, '0')}`);
                
                this.ctx.strokeStyle = gradient;
                this.ctx.lineWidth = current.width;
                this.ctx.stroke();
            }
        }
    }
    
    renderParticles() {
        this.particles.forEach(particle => {
            this.ctx.save();
            this.ctx.globalAlpha = particle.opacity;
            this.ctx.translate(particle.x, particle.y);
            this.ctx.scale(particle.scale, particle.scale);
            
            if (particle.type === 'bokeh') {
                this.renderBokehParticle(particle);
            } else {
                this.renderFrameParticle(particle);
            }
            
            this.ctx.restore();
        });
    }
    
    renderBokehParticle(particle) {
        // Create bokeh light effect
        const gradient = this.ctx.createRadialGradient(0, 0, 0, 0, 0, 8);
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(0.5, `${particle.color}80`);
        gradient.addColorStop(1, 'transparent');
        
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, 8, 0, Math.PI * 2);
        this.ctx.fill();
    }
    
    renderFrameParticle(particle) {
        // Create photo frame outline effect
        this.ctx.strokeStyle = particle.color;
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(-6, -4, 12, 8);
        
        // Add inner detail
        this.ctx.beginPath();
        this.ctx.moveTo(-2, -2);
        this.ctx.lineTo(2, -2);
        this.ctx.lineTo(2, 2);
        this.ctx.lineTo(-2, 2);
        this.ctx.closePath();
        this.ctx.stroke();
    }
    
    createClickEffect(x, y) {
        // Create ripple effect on click
        const ripple = document.createElement('div');
        ripple.className = 'click-ripple';
        ripple.style.cssText = `
            position: fixed;
            left: ${x - 25}px;
            top: ${y - 25}px;
            width: 50px;
            height: 50px;
            border: 2px solid var(--primary-orange);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            animation: ripple-expand 0.6s ease-out forwards;
        `;
        
        document.body.appendChild(ripple);
        
        // Add ripple animation to CSS if not exists
        if (!document.querySelector('#ripple-styles')) {
            const style = document.createElement('style');
            style.id = 'ripple-styles';
            style.textContent = `
                @keyframes ripple-expand {
                    0% {
                        transform: scale(0);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(3);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    createParticleBurst(x, y) {
        // Create burst of particles on click
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const speed = Math.random() * 3 + 2;
            
            this.particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                color: this.getRandomColor(),
                life: this.particleLifetime,
                opacity: 1,
                scale: 1,
                type: Math.random() < 0.7 ? 'bokeh' : 'frame'
            });
        }
    }
    
    getRandomColor() {
        return this.colors[Math.floor(Math.random() * this.colors.length)];
    }
    
    // Public methods for external control
    setTrailLength(length) {
        this.trailLength = Math.max(5, Math.min(50, length));
    }
    
    setTrailOpacity(opacity) {
        this.trailOpacity = Math.max(0.1, Math.min(1, opacity));
    }
    
    setParticleCount(count) {
        this.maxParticles = Math.max(5, Math.min(30, count));
    }
    
    toggleVisibility() {
        this.isVisible = !this.isVisible;
        this.cursor.style.opacity = this.isVisible ? '1' : '0';
    }
}

// Initialize ShutterTrail cursor when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create and initialize the cursor effect
    const shutterTrail = new ShutterTrailCursor();
    
    // Expose to global scope for debugging/control
    window.shutterTrail = shutterTrail;
    
    // Add performance monitoring
    if (window.location.search.includes('debug')) {
        setInterval(() => {
            console.log(`ShutterTrail Performance: ${Math.round(1000 / (performance.now() - shutterTrail.lastTime))} FPS`);
        }, 1000);
    }
    
    // Add keyboard shortcuts for cursor customization
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case '1':
                shutterTrail.setTrailLength(10);
                break;
            case '2':
                shutterTrail.setTrailLength(20);
                break;
            case '3':
                shutterTrail.setTrailLength(30);
                break;
            case 'v':
                shutterTrail.toggleVisibility();
                break;
            case 'p':
                shutterTrail.setParticleCount(shutterTrail.maxParticles === 15 ? 30 : 15);
                break;
        }
    });
    
    // Add console info
    console.log(`
    🎯 ShutterTrail Cursor Effect Loaded!
    
    Keyboard Controls:
    1, 2, 3 - Adjust trail length
    V - Toggle cursor visibility
    P - Toggle particle density
    
    Performance: Optimized for smooth 60fps animation
    Brand: ShutterTrail - Where technology meets creativity
    `);
});
