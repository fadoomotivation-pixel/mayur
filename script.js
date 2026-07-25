/* ==========================================
   MAYUR AEROCITY II — Interactions
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // --- Navigation Scroll Effect ---
    const nav = document.getElementById('nav');
    const handleScroll = () => {
        if (window.scrollY > 60) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // --- Mobile Nav Toggle ---
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('open');
        document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // --- Scroll Reveal ---
    const revealElements = document.querySelectorAll('[data-reveal]');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 80);
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // --- Animated Counter ---
    const countElement = document.querySelector('[data-count]');
    if (countElement) {
        const target = parseInt(countElement.dataset.count);
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCount(countElement, target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        counterObserver.observe(countElement);
    }

    function animateCount(el, target) {
        let current = 0;
        const duration = 2000;
        const step = target / (duration / 16);
        
        function update() {
            current += step;
            if (current >= target) {
                el.textContent = target;
                return;
            }
            el.textContent = Math.floor(current);
            requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    }

    // --- Form Submission ---
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const interest = document.getElementById('interest').value;
            const message = document.getElementById('message').value;
            
            // Create WhatsApp message
            let whatsappText = `Hi, I'm interested in Mayur Aerocity II plots.\n\n`;
            whatsappText += `Name: ${name}\n`;
            whatsappText += `Phone: ${phone}\n`;
            if (interest) whatsappText += `Interest: ${interest}\n`;
            if (message) whatsappText += `Message: ${message}\n`;
            
            const whatsappURL = `https://wa.me/919899974590?text=${encodeURIComponent(whatsappText)}`;
            
            // Show success state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '✓ Sent! Redirecting to WhatsApp...';
            submitBtn.style.background = '#25d366';
            submitBtn.style.color = '#fff';
            
            setTimeout(() => {
                window.open(whatsappURL, '_blank');
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.style.color = '';
                form.reset();
            }, 1200);
        });
    }

    // --- Smooth scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const offset = nav.offsetHeight + 20;
                const position = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({
                    top: position,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Proximity bars animation ---
    const proximityBars = document.querySelectorAll('.proximity-bar');
    const barObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                barObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    proximityBars.forEach(bar => barObserver.observe(bar));
});
