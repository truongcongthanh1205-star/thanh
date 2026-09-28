// ===============================
// ĐỔI MENU KHI BẤM
// ===============================

const navLinks = document.querySelectorAll(".nav-link");

// Type through the roles in the hero subtitle.
const typedRole = document.getElementById("typedRole");
const roleOptions = ["Sinh viên Sư phạm Tin học", "Sinh viên Sư phạm Toán học", "Web Developer"];

if (typedRole && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    let roleIndex = 0;
    let characterIndex = roleOptions[0].length;
    let deleting = false;

    function animateRole() {
        if (document.hidden) {
            window.setTimeout(animateRole, 500);
            return;
        }

        const role = roleOptions[roleIndex];
        typedRole.textContent = role.slice(0, characterIndex);

        if (!deleting && characterIndex === role.length) {
            deleting = true;
            window.setTimeout(animateRole, 1500);
            return;
        }

        if (deleting && characterIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roleOptions.length;
        }

        characterIndex += deleting ? -1 : 1;
        window.setTimeout(animateRole, deleting ? 45 : 85);
    }

    window.setTimeout(animateRole, 1200);
}

// Reveal key content as it enters the viewport. Leave content visible if unsupported.
const revealTargets = document.querySelectorAll(
    ".section-title, .about-image, .about-content, .skill-card, .soft-skill-card, .extra-skills, .project-card, .achievement-card, .academic-card, .activity-card, .contact-info, .contact-form"
);

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.classList.add("motion-ready");
    revealTargets.forEach(function(element, index) {
        element.classList.add("reveal-on-scroll");
        element.style.setProperty("--reveal-delay", (index % 4) * 90 + "ms");
    });

    const revealObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.14, rootMargin: "0px 0px -40px 0px" });

    revealTargets.forEach(function(element) {
        revealObserver.observe(element);
    });
}

// Theme toggle with a saved browser preference.
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("portfolio-theme");

function setTheme(theme) {
    const isDark = theme === "dark";
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", isDark ? "Chuyển sang giao diện sáng" : "Chuyển sang giao diện tối");
    themeToggle.querySelector(".theme-icon").textContent = isDark ? "☀️" : "🌙";
    themeToggle.querySelector(".theme-label").textContent = isDark ? "Light mode" : "Dark mode";
}

setTheme(savedTheme === "dark" ? "dark" : "light");
themeToggle.addEventListener("click", function() {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
});

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// ===============================
// TỰ ĐỘNG ĐỔI MENU KHI CUỘN
// ===============================

const sections = document.querySelectorAll(".page");

window.addEventListener("scroll", function() {

    let current = "";

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(function(link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ===============================
// FORM LIÊN HỆ
// ===============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert(
        "Cảm ơn bạn đã gửi lời nhắn cho Trương Công Thành!"
    );

    contactForm.reset();

});
