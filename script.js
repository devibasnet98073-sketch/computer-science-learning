/* =========================================================
   SHAMBHU KHATRI — PREMIUM PORTFOLIO
   SCRIPT.JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       01 — LOADING SCREEN
    ===================================================== */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.classList.add("hide");

        }, 900);

    });



    /* =====================================================
       02 — NAVBAR SCROLL EFFECT
    ===================================================== */

    const navbar = document.getElementById("navbar");

    function handleNavbar() {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", handleNavbar);

    handleNavbar();



    /* =====================================================
       03 — MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.getElementById("navMenu");

    const navLinks =
        document.querySelectorAll(".nav-link");


    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("open");

    });


    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

        });

    });



    /* =====================================================
       04 — DARK / LIGHT MODE
    ===================================================== */

    const themeToggle =
        document.getElementById("themeToggle");

    const themeIcon =
        themeToggle.querySelector("i");


    const savedTheme =
        localStorage.getItem("portfolio-theme");


    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        themeIcon.classList.remove("fa-moon");

        themeIcon.classList.add("fa-sun");

    }


    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");


        const isDark =
            document.body.classList.contains("dark");


        if (isDark) {

            themeIcon.classList.remove("fa-moon");

            themeIcon.classList.add("fa-sun");

            localStorage.setItem(
                "portfolio-theme",
                "dark"
            );

        } else {

            themeIcon.classList.remove("fa-sun");

            themeIcon.classList.add("fa-moon");

            localStorage.setItem(
                "portfolio-theme",
                "light"
            );

        }

    });



    /* =====================================================
       05 — TYPING ANIMATION
    ===================================================== */

    const typingText =
        document.getElementById("typingText");


    const words = [

        "Computer Science Student",

        "Web Developer",

        "UI / UX Explorer",

        "Creative Learner",

        "Tech Enthusiast",

        "Future Developer"

    ];


    let wordIndex = 0;

    let characterIndex = 0;

    let deleting = false;


    function typeEffect() {

        const currentWord =
            words[wordIndex];


        if (!deleting) {

            typingText.textContent =
                currentWord.substring(
                    0,
                    characterIndex + 1
                );

            characterIndex++;


            if (
                characterIndex ===
                currentWord.length
            ) {

                deleting = true;

                setTimeout(
                    typeEffect,
                    1600
                );

                return;

            }

        } else {

            typingText.textContent =
                currentWord.substring(
                    0,
                    characterIndex - 1
                );

            characterIndex--;


            if (characterIndex === 0) {

                deleting = false;

                wordIndex =
                    (wordIndex + 1)
                    % words.length;

            }

        }


        const speed =
            deleting ? 45 : 75;


        setTimeout(
            typeEffect,
            speed
        );

    }


    setTimeout(
        typeEffect,
        1200
    );



    /* =====================================================
       06 — SCROLL REVEAL ANIMATION
    ===================================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "active"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });



    /* =====================================================
       07 — STAGGER CARD ANIMATION
    ===================================================== */

    const cardGroups = [

        ".interest-card",

        ".project-card",

        ".skill-row"

    ];


    cardGroups.forEach(selector => {

        const cards =
            document.querySelectorAll(selector);


        cards.forEach((card, index) => {

            card.style.transitionDelay =
                `${index * 0.08}s`;

        });

    });



    /* =====================================================
       08 — ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll("section[id]");


    function updateActiveNav() {

        let currentSection = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");


            const target =
                link.getAttribute("href");


            if (
                target ===
                `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNav
    );


    updateActiveNav();



    /* =====================================================
       09 — BACK TO TOP
    ===================================================== */

    const backToTop =
        document.getElementById("backToTop");


    function handleBackToTop() {

        if (window.scrollY > 600) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }


    window.addEventListener(
        "scroll",
        handleBackToTop
    );


    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );



    /* =====================================================
       10 — SMOOTH INTERNAL LINKS
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener(
                "click",
                function(event) {

                    const targetId =
                        this.getAttribute(
                            "href"
                        );


                    if (
                        targetId === "#" ||
                        !targetId
                    ) {

                        return;

                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({

                            behavior: "smooth",

                            block: "start"

                        });

                    }

                }
            );

        });



    /* =====================================================
       11 — ROCKET PARALLAX
    ===================================================== */

    const rocketScene =
        document.querySelector(
            ".rocket-scene"
        );


    window.addEventListener(
        "scroll",
        () => {

            if (!rocketScene) return;


            const scrollValue =
                window.scrollY;


            if (scrollValue < 900) {

                rocketScene.style.transform =
                    `translateY(${scrollValue * 0.08}px)`;

            }

        }
    );



    /* =====================================================
       12 — MOUSE MOVEMENT EFFECT
    ===================================================== */

    const heroVisual =
        document.querySelector(
            ".hero-visual"
        );


    if (
        heroVisual &&
        window.innerWidth > 800
    ) {

        heroVisual.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    heroVisual.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const moveX =
                    (x - centerX) / 35;


                const moveY =
                    (y - centerY) / 35;


                rocketScene.style.transform =
                    `translate(${moveX}px, ${moveY}px)`;

            }
        );


        heroVisual.addEventListener(
            "mouseleave",
            () => {

                rocketScene.style.transform =
                    "translate(0,0)";

            }
        );

    }



    /* =====================================================
       13 — PROJECT CARD TILT
    ===================================================== */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    if (window.innerWidth > 800) {

        projectCards.forEach(card => {

            card.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    const centerX =
                        rect.width / 2;


                    const centerY =
                        rect.height / 2;


                    const rotateX =
                        ((y - centerY) /
                            centerY) * -2;


                    const rotateY =
                        ((x - centerX) /
                            centerX) * 2;


                    card.style.transform =
                        `perspective(900px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)
                         translateY(-8px)`;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        });

    }



    /* =====================================================
       14 — SKILL NUMBER COUNTER
    ===================================================== */

    const skillNumbers =
        document.querySelectorAll(
            ".skill-row strong"
        );


    const skillSection =
        document.querySelector(
            "#skills"
        );


    let skillsAnimated = false;


    function animateSkillNumbers() {

        if (!skillSection) return;


        const rect =
            skillSection.getBoundingClientRect();


        if (
            rect.top <
            window.innerHeight * .75 &&
            !skillsAnimated
        ) {

            skillsAnimated = true;


            skillNumbers.forEach(number => {

                const finalValue =
                    parseInt(
                        number.textContent
                    );


                let current = 0;


                const interval =
                    setInterval(
                        () => {

                            current += 1;


                            number.textContent =
                                `${current}%`;


                            if (
                                current >=
                                finalValue
                            ) {

                                clearInterval(
                                    interval
                                );

                            }

                        },
                        12
                    );

            });

        }

    }


    window.addEventListener(
        "scroll",
        animateSkillNumbers
    );


    animateSkillNumbers();



    /* =====================================================
       15 — CURSOR GLOW
    ===================================================== */

    const cursorGlow =
        document.createElement("div");


    cursorGlow.className =
        "cursor-glow";


    document.body.appendChild(
        cursorGlow
    );


    const cursorStyle =
        document.createElement("style");


    cursorStyle.textContent = `

        .cursor-glow {

            position: fixed;

            width: 180px;

            height: 180px;

            border-radius: 50%;

            pointer-events: none;

            background:
                radial-gradient(
                    circle,
                    rgba(120,120,120,.10),
                    transparent 70%
                );

            transform:
                translate(-50%,-50%);

            z-index: 9998;

            opacity: 0;

            transition:
                opacity .3s ease;

        }

        @media (max-width: 800px) {

            .cursor-glow {

                display: none;

            }

        }

    `;


    document.head.appendChild(
        cursorStyle
    );


    if (window.innerWidth > 800) {

        document.addEventListener(
            "mousemove",
            event => {

                cursorGlow.style.left =
                    `${event.clientX}px`;

                cursorGlow.style.top =
                    `${event.clientY}px`;

                cursorGlow.style.opacity =
                    "1";

            }
        );

    }



    /* =====================================================
       16 — BUTTON RIPPLE EFFECT
    ===================================================== */

    const buttons =
        document.querySelectorAll(
            ".primary-btn, .secondary-btn, .contact-button"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            function(event) {

                const ripple =
                    document.createElement(
                        "span"
                    );


                ripple.className =
                    "button-ripple";


                const rect =
                    button.getBoundingClientRect();


                const size =
                    Math.max(
                        rect.width,
                        rect.height
                    );


                ripple.style.width =
                    `${size}px`;

                ripple.style.height =
                    `${size}px`;

                ripple.style.left =
                    `${event.clientX - rect.left - size / 2}px`;

                ripple.style.top =
                    `${event.clientY - rect.top - size / 2}px`;


                button.appendChild(
                    ripple
                );


                setTimeout(
                    () => {

                        ripple.remove();

                    },
                    600
                );

            }
        );

    });


    const rippleStyle =
        document.createElement("style");


    rippleStyle.textContent = `

        .primary-btn,
        .secondary-btn,
        .contact-button {

            position: relative;

            overflow: hidden;

        }

        .button-ripple {

            position: absolute;

            border-radius: 50%;

            background:
                rgba(255,255,255,.18);

            transform:
                scale(0);

            animation:
                rippleAnimation .6s linear;

            pointer-events: none;

        }

        @keyframes rippleAnimation {

            to {

                transform: scale(2.5);

                opacity: 0;

            }

        }

    `;


    document.head.appendChild(
        rippleStyle
    );



    /* =====================================================
       17 — IMAGE LOAD EFFECT
    ===================================================== */

    const profilePhoto =
        document.querySelector(
            ".profile-photo"
        );


    if (profilePhoto) {

        profilePhoto.addEventListener(
            "load",
            () => {

                profilePhoto.classList.add(
                    "loaded"
                );

            }
        );

    }



    /* =====================================================
       18 — CLOSE MOBILE MENU OUTSIDE CLICK
    ===================================================== */

    document.addEventListener(
        "click",
        event => {

            if (
                navMenu.classList.contains("open") &&
                !navMenu.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                navMenu.classList.remove(
                    "open"
                );

            }

        }
    );



    /* =====================================================
       19 — ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                navMenu.classList.remove(
                    "open"
                );

            }

        }
    );



    /* =====================================================
       20 — CONSOLE MESSAGE
    ===================================================== */

    console.log(
        "%c🚀 Shambhu Khatri Portfolio",
        "font-size:18px;font-weight:bold;"
    );

    console.log(
        "%cBuilt with HTML • CSS • JavaScript",
        "font-size:12px;"
    );

});