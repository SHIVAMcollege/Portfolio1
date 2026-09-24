/* =================================
   MOBILE NAVIGATION
================================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const isExpanded =
            navLinks.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isExpanded
        );

        menuToggle.textContent =
            isExpanded ? "✕" : "☰";

    });

}


/* =================================
   CLOSE MOBILE MENU AFTER CLICK
================================= */

const navigationLinks =
    document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (navLinks && menuToggle) {

            navLinks.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.textContent = "☰";

        }

    });

});


/* =================================
   AUTOMATIC FOOTER YEAR
================================= */

const yearElement =
    document.getElementById("year");

if (yearElement) {
    yearElement.textContent =
        new Date().getFullYear();
}


/* =================================
   CONTACT FORM DEMO
================================= */

const contactForm =
    document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const nameInput =
            document.getElementById("name");

        const emailInput =
            document.getElementById("email");

        const messageInput =
            document.getElementById("message");

        const name =
            nameInput ? nameInput.value.trim() : "";

        const email =
            emailInput ? emailInput.value.trim() : "";

        const message =
            messageInput ? messageInput.value.trim() : "";

        if (!name || !email || !message) {
            alert("Please fill in all the fields.");
            return;
        }

        alert(
            `Thank you, ${name}! Your message has been received as a demo.`
        );

        contactForm.reset();

    });

}


/* =================================
   ACTIVE NAVIGATION LINK
================================= */

const sections =
    document.querySelectorAll("section[id]");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navItems.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

});


/* =================================
   REVEAL SECTIONS ON SCROLL
================================= */

const revealElements =
    document.querySelectorAll(
        ".section-title, .education-card, .skill-card, .project-card"
    );

const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);

});