(function() {
    'use strict';

    /**
     * Handles the hamburger menu toggle functionality.
     */
    function setupHamburgerMenu() {
        const hamburger = document.querySelector('.hamburger-menu');
        const navLinks = document.querySelector('.nav-links');

        if (hamburger && navLinks) {
            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                hamburger.classList.toggle('active');
            });
        }
    }

    /**
     * Highlights the active navigation link based on the scroll position.
     */
    function setupScrollSpy() {
        const sections = document.querySelectorAll('section, main');
        const navLi = document.querySelectorAll('nav .nav-links a');

        if (sections.length > 0 && navLi.length > 0) {
            window.addEventListener('scroll', () => {
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                        current = section.getAttribute('id');
                    }
                });

                navLi.forEach(a => {
                    a.classList.remove('active');
                    if (a.getAttribute('href') === '#' + current) {
                        a.classList.add('active');
                    }
                });
            });
        }
    }

    /**
     * Initializes the AOS (Animate On Scroll) library.
     */
    function initAOS() {
        AOS.init({
            duration: 800,
            offset: 50,
        });
    }

    /**
     * Initializes the TypeIt animation for the hero section.
     */
    function initTypeIt() {
        new TypeIt("#nama-baris-1", {
            speed: 100,
            startDelay: 900,
            cursor: false,
            afterComplete: function (instance) {
                instance.destroy();
                new TypeIt("#nama-baris-2", {
                    speed: 120,
                    cursor: false,
                    breakLines: false,
                    afterComplete: function (instance) {
                        instance.destroy();
                        new TypeIt("#profesi", {
                           speed: 70,
                            cursor: false,
                            breakLines: false,
                            afterComplete: function (instance) {
                                instance.destroy();
                            }
                        })
                        .type("CERTIFIED EXCAVATOR HEAVY EQUIPMENT OPERATOR")
                        .go();
                    }
                })
                .type("NURHIDAYAT GANI")
                .go();
            }
        })
        .type("MUHAMMAD", {delay: 300})
        .go();
    }

    /**
     * Fires when the DOM is fully loaded.
     */
    document.addEventListener('DOMContentLoaded', function () {
        setupHamburgerMenu();
        setupScrollSpy();
        initAOS();
        initTypeIt();
    });

})();