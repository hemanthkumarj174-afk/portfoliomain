// ========================================
// CUSTOM CURSOR
// ========================================
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = (e.clientX - 15) + 'px';
    cursor.style.top = (e.clientY - 15) + 'px';
});

// ========================================
// NAVIGATION
// ========================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger?.addEventListener('click', () => {
    navMenu?.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu?.classList.remove('active');
    });
});

// ========================================
// SMOOTH SCROLL NAVIGATION
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section, .side-by-side').forEach(element => {
    observer.observe(element);
});

// ========================================
// SKILL BARS ANIMATION
// ========================================
const skillBarsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-item').forEach(item => {
    skillBarsObserver.observe(item);
});

// ========================================
// PARALLAX EFFECT FOR HERO
// ========================================
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    const heroText = document.querySelector('.hero-text');
    
    if (heroVisual && scrollTop < 1000) {
        heroVisual.style.transform = `translateY(${scrollTop * 0.5}px)`;
    }
    
    if (heroText && scrollTop < 1000) {
        heroText.style.transform = `translateY(${scrollTop * 0.3}px)`;
    }
});

// ========================================
// CONTACT FORM HANDLING
// ========================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const button = contactForm.querySelector('button');
        const originalText = button.textContent;
        button.textContent = 'Message Sent! ✓';
        button.disabled = true;
        contactForm.reset();
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
        }, 3000);
    });
}

// ========================================
// TYPING EFFECT FOR HERO SUBTITLE
// ========================================
const heroSubtitle = document.querySelector('.hero-subtitle');
if (heroSubtitle) {
    const text = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    let index = 0;
    function typeWriter() {
        if (index < text.length) {
            heroSubtitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    }
    setTimeout(typeWriter, 1500);
}

// ========================================
// PROJECT CARDS HOVER EFFECT
// ========================================
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ========================================
// STATS COUNTER ANIMATION
// ========================================
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll('.stat h3');
            stats.forEach(stat => {
                const target = parseInt(stat.textContent);
                let current = 0;
                const increment = target / 30;
                const counter = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        stat.textContent = target + '+';
                        clearInterval(counter);
                    } else {
                        stat.textContent = Math.floor(current);
                    }
                }, 50);
            });
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.about-stats').forEach(stats => {
    statsObserver.observe(stats);
});

// ========================================
// SCROLL TO TOP BUTTON
// ========================================
const scrollTopButton = document.createElement('button');
scrollTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopButton.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 45px;
    height: 45px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    z-index: 999;
    font-size: 1.2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
`;
document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', () => {
    scrollTopButton.style.display = window.pageYOffset > 300 ? 'flex' : 'none';
    scrollTopButton.style.alignItems = 'center';
    scrollTopButton.style.justifyContent = 'center';
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========================================
// ACTIVE NAV LINK INDICATOR
// ========================================
window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        if (window.pageYOffset >= section.offsetTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

console.log('🚀 Hemanth Kumar J Portfolio Loaded Successfully!');
