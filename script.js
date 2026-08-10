/* =========================================================
   SHAMBHU KHATRI — PREMIUM PORTFOLIO
   SCRIPT.JS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       01 — SELECTORS
    ===================================================== */

    const body = document.body;

    const navbar =
        document.querySelector(".navbar");

    const mobileBtn =
        document.querySelector(".mobile-btn");

    const navLinks =
        document.querySelector(".nav-links");

    const themeBtn =
        document.querySelector(".theme-btn");

    const backTop =
        document.querySelector(".back-top");

    const rocketWrap =
        document.querySelector(".rocket-wrap");

    const typingElement =
        document.querySelector(".typing");

    const sections =
        document.querySelectorAll("section[id]");

    const navItems =
        document.querySelectorAll(".nav-link");



    /* =====================================================
       02 — TYPING ANIMATION
    ===================================================== */

    if (typingElement) {

        const words = [
            "Computer Science Student",
            "Future Developer",
            "UI/UX Explorer",
            "Creative Learner",
            "Tech Enthusiast"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {

            const currentWord =
                words[wordIndex];

            if (!deleting) {

                typingElement.textContent =
                    currentWord.substring(
                        0,
                        charIndex + 1
                    );

                charIndex++;

                if (charIndex === currentWord.length) {

                    deleting = true;

                    setTimeout(
                        typeEffect,
                        1600
                    );

                    return;
                }

            } else {

                typingElement.textContent =
                    currentWord.substring(
                        0,
                        charIndex - 1
                    );

                charIndex--;

                if (charIndex === 0) {

                    deleting = false;

                    wordIndex =
                        (wordIndex + 1) %
                        words.length;
                }
            }

            setTimeout(
                typeEffect,
                deleting ? 45 : 80
            );
        }

        typeEffect();
    }



    /* =====================================================
       03 — MOBILE MENU
    ===================================================== */

    if (mobileBtn && navLinks) {

        mobileBtn.addEventListener(
            "click",
            () => {

                navLinks.classList.toggle("open");

                mobileBtn.classList.toggle(
                    "active"
                );
            }
        );

        navItems.forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "open"
                    );

                    mobileBtn.classList.remove(
                        "active"
                    );
                }
            );
        });

        document.addEventListener(
            "click",
            event => {

                const clickedInside =
                    navLinks.contains(
                        event.target
                    ) ||
                    mobileBtn.contains(
                        event.target
                    );

                if (!clickedInside) {

                    navLinks.classList.remove(
                        "open"
                    );

                    mobileBtn.classList.remove(
                        "active"
                    );
                }
            }
        );
    }



    /* =====================================================
       04 — DARK / LIGHT THEME
    ===================================================== */

    if (themeBtn) {

        const savedTheme =
            localStorage.getItem(
                "shambhu-theme"
            );

        if (savedTheme === "light") {
            body.classList.add("light");
        }

        updateThemeIcon();

        themeBtn.addEventListener(
            "click",
            () => {

                body.classList.toggle(
                    "light"
                );

                const isLight =
                    body.classList.contains(
                        "light"
                    );

                localStorage.setItem(
                    "shambhu-theme",
                    isLight
                        ? "light"
                        : "dark"
                );

                updateThemeIcon();
            }
        );
    }


    function updateThemeIcon() {

        if (!themeBtn) return;

        const icon =
            themeBtn.querySelector("i");

        if (!icon) return;

        if (body.classList.contains("light")) {

            icon.className =
                "fa-solid fa-moon";

        } else {

            icon.className =
                "fa-solid fa-sun";
        }
    }



    /* =====================================================
       05 — NAVBAR SCROLL EFFECT
    ===================================================== */

    function handleNavbar() {

        if (!navbar) return;

        if (window.scrollY > 40) {

            navbar.classList.add(
                "scrolled"
            );

        } else {

            navbar.classList.remove(
                "scrolled"
            );
        }
    }

    window.addEventListener(
        "scroll",
        handleNavbar
    );

    handleNavbar();



    /* =====================================================
       06 — SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );

    if (revealElements.length) {

        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );

                                revealObserver.unobserve(
                                    entry.target
                                );
                            }
                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );

        revealElements.forEach(
            element => {

                revealObserver.observe(
                    element
                );
            }
        );
    }



    /* =====================================================
       07 — ACTIVE NAVIGATION
    ===================================================== */

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop;

            if (
                window.scrollY >=
                sectionTop - 180
            ) {

                currentSection =
                    section.getAttribute(
                        "id"
                    );
            }
        });

        navItems.forEach(link => {

            link.classList.remove(
                "active"
            );

            const href =
                link.getAttribute(
                    "href"
                );

            if (
                href ===
                "#" + currentSection
            ) {

                link.classList.add(
                    "active"
                );
            }
        });
    }

    window.addEventListener(
        "scroll",
        updateActiveNav
    );

    updateActiveNav();



    /* =====================================================
       08 — BACK TO TOP
    ===================================================== */

    function handleBackTop() {

        if (!backTop) return;

        if (window.scrollY > 600) {

            backTop.classList.add(
                "show"
            );

        } else {

            backTop.classList.remove(
                "show"
            );
        }
    }

    window.addEventListener(
        "scroll",
        handleBackTop
    );

    handleBackTop();


    if (backTop) {

        backTop.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        );
    }



    /* =====================================================
       09 — SMOOTH NAVIGATION
    ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );

                    if (
                        !targetId ||
                        targetId === "#"
                    ) return;

                    const target =
                        document.querySelector(
                            targetId
                        );

                    if (!target) return;

                    event.preventDefault();

                    const offset = 75;

                    const targetPosition =
                        target.getBoundingClientRect()
                            .top +
                        window.scrollY -
                        offset;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth"
                    });
                }
            );
        });



    /* =====================================================
       10 — ROCKET MOUSE INTERACTION
    ===================================================== */

    if (
        rocketWrap &&
        window.matchMedia(
            "(pointer:fine)"
        ).matches
    ) {

        document.addEventListener(
            "mousemove",
            event => {

                const x =
                    (
                        event.clientX /
                        window.innerWidth
                    ) - 0.5;

                const y =
                    (
                        event.clientY /
                        window.innerHeight
                    ) - 0.5;

                const moveX =
                    x * 18;

                const moveY =
                    y * 18;

                rocketWrap.style.transform =
                    `translate(${moveX}px, ${moveY}px)`;
            }
        );

        document.addEventListener(
            "mouseleave",
            () => {

                rocketWrap.style.transform =
                    "";
            }
        );
    }



    /* =====================================================
       11 — FLOATING CARD PARALLAX
    ===================================================== */

    const floatCards =
        document.querySelectorAll(
            ".float-card"
        );

    if (
        floatCards.length &&
        window.matchMedia(
            "(pointer:fine)"
        ).matches
    ) {

        document.addEventListener(
            "mousemove",
            event => {

                const x =
                    (
                        event.clientX /
                        window.innerWidth
                    ) - 0.5;

                const y =
                    (
                        event.clientY /
                        window.innerHeight
                    ) - 0.5;

                floatCards.forEach(
                    (card, index) => {

                        const strength =
                            (index + 1) * 5;

                        card.style.marginLeft =
                            `${x * strength}px`;

                        card.style.marginTop =
                            `${y * strength}px`;
                    }
                );
            }
        );
    }



    /* =====================================================
       12 — PROJECT MODAL
    ===================================================== */

    const modal =
        document.querySelector(".modal");

    const modalClose =
        document.querySelector(".modal-close");

    const modalTitle =
        document.querySelector(
            ".modal-box h2"
        );

    const modalDescription =
        document.querySelector(
            ".modal-box p"
        );

    const modalTags =
        document.querySelector(
            ".modal-tags"
        );

    const projectButtons =
        document.querySelectorAll(
            ".project-btn"
        );


    const projectData = [

        {
            title:
                "Student Learning Platform",

            description:
                "A modern learning concept designed for students to explore notes, programming resources, quizzes and useful study materials in one clean digital space.",

            tags: [
                "HTML",
                "CSS",
                "JavaScript",
                "Education"
            ]
        },

        {
            title:
                "Interactive Quiz System",

            description:
                "A responsive quiz experience with questions, timer, score calculation and an engaging interface designed especially for students.",

            tags: [
                "JavaScript",
                "Quiz",
                "UI/UX",
                "Responsive"
            ]
        },

        {
            title:
                "Creative Web Experience",

            description:
                "A premium experimental web interface focused on clean visuals, smooth animations and modern user experience.",

            tags: [
                "Web Design",
                "Animation",
                "UI/UX"
            ]
        },

        {
            title:
                "College Management Concept",

            description:
                "A future-focused college management concept designed to connect students, teachers, learning resources and college information through one platform.",

            tags: [
                "Management",
                "Education",
                "Web App",
                "UX"
            ]
        }

    ];


    function openProject(index) {

        if (!modal) return;

        const data =
            projectData[index];

        if (!data) return;

        if (modalTitle) {

            modalTitle.textContent =
                data.title;
        }

        if (modalDescription) {

            modalDescription.textContent =
                data.description;
        }

        if (modalTags) {

            modalTags.innerHTML =
                data.tags
                    .map(
                        tag =>
                            `<span>${tag}</span>`
                    )
                    .join("");
        }

        modal.classList.add("show");

        body.style.overflow = "hidden";
    }


    projectButtons.forEach(
        (button, index) => {

            button.addEventListener(
                "click",
                () => {

                    openProject(index);
                }
            );
        }
    );


    function closeProject() {

        if (!modal) return;

        modal.classList.remove(
            "show"
        );

        body.style.overflow = "";
    }


    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeProject
        );
    }


    if (modal) {

        modal.addEventListener(
            "click",
            event => {

                if (
                    event.target === modal
                ) {

                    closeProject();
                }
            }
        );
    }


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeProject();
            }
        }
    );



    /* =====================================================
       13 — CONTACT INTERACTION
    ===================================================== */

    const contactBtn =
        document.querySelector(
            ".contact-btn"
        );

    const connectMessage =
        document.querySelector(
            ".connect-message"
        );


    if (contactBtn) {

        contactBtn.addEventListener(
            "click",
            () => {

                if (connectMessage) {

                    connectMessage.classList.add(
                        "show"
                    );

                    connectMessage.textContent =
                        "Thanks for visiting my portfolio. Let's connect and build something amazing.";
                }

                contactBtn.style.transform =
                    "scale(.97)";

                setTimeout(() => {

                    contactBtn.style.transform =
                        "";

                }, 150);
            }
        );
    }



    /* =====================================================
       14 — 3D TILT EFFECT
    ===================================================== */

    const tiltCards =
        document.querySelectorAll(
            ".interest-card, .project"
        );


    if (
        window.matchMedia(
            "(pointer:fine)"
        ).matches
    ) {

        tiltCards.forEach(card => {

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
                        (
                            y - centerY
                        ) / 25;

                    const rotateY =
                        (
                            centerX - x
                        ) / 25;

                    card.style.transform =
                        `perspective(900px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)
                         translateY(-6px)`;
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
       15 — SKILL COUNTER
    ===================================================== */

    const skillNumbers =
        document.querySelectorAll(
            ".skill-info > span"
        );

    skillNumbers.forEach(
        number => {

            const value =
                parseInt(
                    number.textContent
                );

            if (
                Number.isNaN(value)
            ) return;

            number.dataset.value =
                value;