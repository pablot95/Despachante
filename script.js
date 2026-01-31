document.addEventListener('DOMContentLoaded', () => {
    
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // --- Scroll Progress Bar ---
    gsap.to('.scroll-progress', {
        width: '100%',
        ease: 'none',
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.3
        }
    });

    // --- Animate Panel Contents - Bidirectional ---
    gsap.utils.toArray('.panel').forEach((panel, index) => {
        const content = panel.querySelector('.panel-content');
        
        gsap.fromTo(content, 
            {
                opacity: 0,
                y: 80
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: panel,
                    start: 'top 90%',
                    end: 'bottom 10%',
                    toggleActions: 'play reverse play reverse'
                }
            }
        );
    });

    // --- Hero Panel Special Animations ---
    gsap.from('.mega-title', {
        opacity: 0,
        scale: 0.8,
        y: 100,
        duration: 1.4,
        ease: 'power4.out',
        delay: 0.2
    });

    // Animate each word of gradient text separately
    const gradientText = document.querySelector('.gradient-text');
    if (gradientText) {
        gsap.from(gradientText, {
            backgroundPosition: '200% center',
            duration: 2,
            ease: 'power2.inOut',
            delay: 0.8
        });
    }

    gsap.from('.lead-text', {
        opacity: 0,
        x: -100,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.8
    });

    // --- Value Items Alternating Animations ---
    gsap.utils.toArray('.value-item').forEach((item, index) => {
        const icon = item.querySelector('.value-icon');
        const content = item.querySelector('.value-content');
        const isOdd = parseInt(item.dataset.index) % 2 === 1;
        
        // Item slides from left or right based on index
        gsap.fromTo(item, 
            {
                opacity: 0,
                x: isOdd ? 200 : -200
            },
            {
                opacity: 1,
                x: 0,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 95%',
                    end: 'bottom 5%',
                    toggleActions: 'play reverse play reverse'
                }
            }
        );

        // Icon animation with rotation
        gsap.fromTo(icon,
            {
                opacity: 0,
                scale: 0,
                rotation: isOdd ? -180 : 180
            },
            {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 1,
                delay: 0.3,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 95%',
                    end: 'bottom 5%',
                    toggleActions: 'play reverse play reverse'
                }
            }
        );

        // Content fades and slides
        gsap.fromTo(content,
            {
                opacity: 0,
                y: 50
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 95%',
                    end: 'bottom 5%',
                    toggleActions: 'play reverse play reverse'
                }
            }
        );
    });

    // --- Services Cards Cool Animations ---
    gsap.utils.toArray('.service-modern').forEach((card, index) => {
        gsap.fromTo(card,
            {
                opacity: 0,
                rotationY: 90,
                y: 80
            },
            {
                opacity: 1,
                rotationY: 0,
                y: 0,
                duration: 1,
                delay: index * 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 95%',
                    end: 'bottom 5%',
                    toggleActions: 'play reverse play reverse'
                }
            }
        );

        // Number animation
        const number = card.querySelector('.service-number');
        if (number) {
            gsap.fromTo(number,
                {
                    opacity: 0,
                    scale: 3
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1.2,
                    delay: index * 0.2 + 0.3,
                    ease: 'elastic.out(1, 0.5)',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 95%',
                        end: 'bottom 5%',
                        toggleActions: 'play reverse play reverse'
                    }
                }
            );
        }
    });

    // --- Diff Items Wave Animation ---
    gsap.utils.toArray('.diff-item').forEach((item, index) => {
        const icon = item.querySelector('i');
        
        gsap.fromTo(item,
            {
                opacity: 0,
                x: -100,
                rotationX: 90
            },
            {
                opacity: 1,
                x: 0,
                rotationX: 0,
                duration: 0.8,
                delay: index * 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 95%',
                    end: 'bottom 5%',
                    toggleActions: 'play reverse play reverse'
                }
            }
        );

        // Icon bounce
        gsap.fromTo(icon,
            {
                scale: 0,
                rotation: 360
            },
            {
                scale: 1,
                rotation: 0,
                duration: 0.6,
                delay: index * 0.15 + 0.3,
                ease: 'back.out(2)',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 95%',
                    end: 'bottom 5%',
                    toggleActions: 'play reverse play reverse'
                }
            }
        );
    });

    // --- Form Cool Animations ---
    const formInputs = document.querySelectorAll('.modern-form input, .modern-form textarea');
    formInputs.forEach((el, index) => {
        gsap.fromTo(el,
            {
                opacity: 0,
                y: 50,
                rotationX: -90
            },
            {
                opacity: 1,
                y: 0,
                rotationX: 0,
                duration: 0.8,
                delay: index * 0.1,
                ease: 'back.out(1.5)',
                scrollTrigger: {
                    trigger: '.modern-form',
                    start: 'top 90%',
                    end: 'bottom 10%',
                    toggleActions: 'play reverse play reverse'
                }
            }
        );
    });

    // Submit button special animation
    gsap.fromTo('.submit-btn',
        {
            opacity: 0,
            scale: 0.5,
            rotation: 180
        },
        {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1,
            delay: formInputs.length * 0.1,
            ease: 'elastic.out(1, 0.5)',
            scrollTrigger: {
                trigger: '.modern-form',
                start: 'top 90%',
                end: 'bottom 10%',
                toggleActions: 'play reverse play reverse'
            }
        }
    );

    // Section headings animation
    gsap.utils.toArray('.section-heading, .eyebrow').forEach(heading => {
        gsap.fromTo(heading,
            {
                opacity: 0,
                y: -50,
                scale: 0.8
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: heading,
                    start: 'top 95%',
                    end: 'bottom 5%',
                    toggleActions: 'play reverse play reverse'
                }
            }
        );
    });

    // --- Floating Nav on Scroll ---
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        const nav = document.querySelector('.floating-nav');
        
        if (currentScroll > 100) {
            nav.style.background = 'rgba(26, 31, 58, 0.95)';
            nav.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.5)';
        } else {
            nav.style.background = 'rgba(26, 31, 58, 0.8)';
            nav.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
        }
        
        lastScroll = currentScroll;
    });

    // --- Form Handling (EmailJS) ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const btn = contactForm.querySelector('.submit-btn');
            const originalText = btn.innerHTML;

            btn.innerHTML = '<span>Enviando...</span>';
            btn.disabled = true;

            /* 
               INTEGRACIÓN CON EMAILJS
               1. Crear cuenta en https://www.emailjs.com/
               2. Crear servicio (Service ID)
               3. Crear template (Template ID)
               4. Obtener Public Key
               
               Código a usar:
               
               emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
                   .then(function() {
                       formStatus.innerHTML = '<span style="color: #25D366;"><i class="fa-solid fa-check-circle"></i> Mensaje enviado con éxito</span>';
                       contactForm.reset();
                       btn.innerHTML = originalText;
                       btn.disabled = false;
                   }, function(error) {
                       formStatus.innerHTML = '<span style="color: #ff6b6b;"><i class="fa-solid fa-exclamation-circle"></i> Error al enviar. Intente de nuevo.</span>';
                       btn.innerHTML = originalText;
                       btn.disabled = false;
                   });
            */

            // Simulación de respuesta exitosa (Eliminar esto cuando se configure EmailJS real)
            setTimeout(() => {
                formStatus.innerHTML = '<span style="color: #25D366;"><i class="fa-solid fa-check-circle"></i> Mensaje enviado correctamente (Demo)</span>';
                contactForm.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }

    // --- Smooth Scroll for Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- Background Image Layers Reveal System ---
    // Each top layer fades out to reveal the one below
    const layers = document.querySelectorAll('.bg-layer');
    const totalLayers = layers.length;
    
    layers.forEach((layer, index) => {
        // Skip the last layer (it stays visible always)
        if (index === totalLayers - 1) return;
        
        const startPercentage = (index / (totalLayers - 1)) * 100;
        const endPercentage = ((index + 1) / (totalLayers - 1)) * 100;
        
        gsap.fromTo(layer,
            {
                opacity: 1
            },
            {
                opacity: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: 'body',
                    start: `${startPercentage}% top`,
                    end: `${endPercentage}% top`,
                    scrub: 1
                }
            }
        );
    });

});
