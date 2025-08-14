// Portfolio Manager - Minimalist Version
class PortfolioManager {
    constructor() {
        this.currentSection = 'home';
        this.init();
    }

    init() {
        this.bindEvents();
        this.setupSmoothScrolling();
        this.setupScrollAnimations();
    }

    bindEvents() {
        // Navigation links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                this.scrollToSection(targetId);
            });
        });

        // Smooth scroll for all internal links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                this.scrollToSection(targetId);
            });
        });

        // Add hover effects to cards
        document.querySelectorAll('.card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-4px)';
                card.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
            });
        });

        // Add hover effects to buttons
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'translateY(-2px)';
            });

            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translateY(0)';
            });
        });



        // Add hover effects to photos
        document.querySelectorAll('.photo-item').forEach(photo => {
            photo.addEventListener('mouseenter', () => {
                photo.style.transform = 'scale(1.03)';
            });

            photo.addEventListener('mouseleave', () => {
                photo.style.transform = 'scale(1)';
            });
        });

        // Form handling for contact section
        this.setupFormHandling();
    }

    setupSmoothScrolling() {
        document.documentElement.style.scrollBehavior = 'smooth';
    }

    setupScrollAnimations() {
        // Create intersection observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all sections and cards for animation
        document.querySelectorAll('.section, .card, .hero-content, .hero-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

        // Trigger initial animations for hero section
        setTimeout(() => {
            const heroContent = document.querySelector('.hero-content');
            const heroCard = document.querySelector('.hero-card');
            if (heroContent) heroContent.style.opacity = '1';
            if (heroContent) heroContent.style.transform = 'translateY(0)';
            if (heroCard) heroCard.style.opacity = '1';
            if (heroCard) heroCard.style.transform = 'translateY(0)';
        }, 100);
    }

    scrollToSection(sectionId) {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80; // Account for navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }

    setupFormHandling() {
        // Add click handlers for contact buttons
        const emailBtn = document.querySelector('a[href^="mailto:"]');
        if (emailBtn) {
            emailBtn.addEventListener('click', () => {
                // Add a subtle click effect
                emailBtn.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    emailBtn.style.transform = 'scale(1)';
                }, 150);
            });
        }

        // Add click effects to all buttons
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', () => {
                btn.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    btn.style.transform = 'scale(1)';
                }, 150);
            });
        });
    }

    // Handle window resize
    handleResize() {
        // Add any responsive adjustments here if needed
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioManager();
    
    // Add window resize listener
    window.addEventListener('resize', () => {
        // Handle any responsive adjustments
    });

    // Add some additional interactive effects
    document.addEventListener('DOMContentLoaded', () => {
        // Add typing effect to hero title
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            heroTitle.style.opacity = '0';
            heroTitle.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                heroTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                heroTitle.style.opacity = '1';
                heroTitle.style.transform = 'translateY(0)';
            }, 300);
        }

        // Add staggered animation to hero buttons
        const heroButtons = document.querySelectorAll('.hero-buttons .btn');
        heroButtons.forEach((btn, index) => {
            btn.style.opacity = '0';
            btn.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                btn.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                btn.style.opacity = '1';
                btn.style.transform = 'translateY(0)';
            }, 600 + (index * 100));
        });

        // Add staggered animation to hero info
        const heroInfo = document.querySelectorAll('.hero-info .info-item');
        heroInfo.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 900 + (index * 100));
        });
    });
});
