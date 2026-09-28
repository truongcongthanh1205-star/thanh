// =========================
// DARK / LIGHT MODE
// =========================

const themeButton = document.getElementById("themeToggle");
const themeIcon = themeButton ? themeButton.querySelector(".theme-icon") : null;
const themeLabel = themeButton ? themeButton.querySelector(".theme-label") : null;

// Kiểm tra giao diện đã lưu
const savedTheme = localStorage.getItem("theme");

// Hàm cập nhật giao diện nút
function updateThemeButton(isDark) {
    if (!themeIcon || !themeLabel) return;

    if (isDark) {
        themeIcon.textContent = "☀️";
        themeLabel.textContent = "Sáng";
    } else {
        themeIcon.textContent = "🌙";
        themeLabel.textContent = "Tối";
    }
}

// Áp dụng giao diện đã lưu
if (savedTheme === "dark") {
    document.body.classList.add("dark");
    updateThemeButton(true);
} else {
    document.body.classList.remove("dark");
    updateThemeButton(false);
}


// Đổi giao diện
if (themeButton) {
    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark");

        const isDark = document.body.classList.contains("dark");

        if (isDark) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

        updateThemeButton(isDark);
    });
}


// =========================
// HIỆU ỨNG GÕ CHỮ
// =========================

const typedRole = document.getElementById("typedRole");

const roles = [
    "Sinh viên Sư phạm Tin học",
    "Sinh viên Sư phạm Toán học",
    "Người yêu thích công nghệ",
    "Người yêu thích lập trình"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    if (!typedRole) return;

    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typedRole.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;

            setTimeout(typeEffect, 1800);
            return;
        }

    } else {
        typedRole.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    const speed = isDeleting ? 50 : 90;

    setTimeout(typeEffect, speed);
}

typeEffect();


// =========================
// FORM LIÊN HỆ
// =========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const nameInput = document.getElementById("contactName");

        const name = nameInput ? nameInput.value.trim() : "";

        if (name === "") {
            alert("Vui lòng nhập họ và tên!");
            return;
        }

        alert(
            "Cảm ơn " +
            name +
            "! Tin nhắn của bạn đã được ghi nhận."
        );

        contactForm.reset();

    });
}


// =========================
// MENU ACTIVE KHI CUỘN
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveMenu() {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + currentSection) {
            link.classList.add("active");
        }

    });
}

window.addEventListener("scroll", updateActiveMenu);

updateActiveMenu();


// =========================
// CUỘN MƯỢT KHI BẤM MENU
// =========================

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = link.getAttribute("href");

        if (!targetId || !targetId.startsWith("#")) {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// =========================
// HIỆU ỨNG HIỆN KHI CUỘN
// =========================

const animatedElements = document.querySelectorAll(
    ".content-card, .skill-card, .project-card, .achievement-card, .academic-card, .activity-card, .contact-item"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);

animatedElements.forEach(function (element) {
    observer.observe(element);
});


// =========================
// ANIMATION THANH KỸ NĂNG
// =========================

const skillBars = document.querySelectorAll(".progress-bar");

const skillObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                const bar = entry.target;

                const width = bar.getAttribute("data-width");

                if (width) {
                    bar.style.width = width;
                }

                skillObserver.unobserve(bar);
            }

        });

    },
    {
        threshold: 0.3
    }
);

skillBars.forEach(function (bar) {

    // Nếu HTML chưa có data-width thì lấy width hiện tại trong CSS
    const currentWidth = getComputedStyle(bar).width;

    if (!bar.hasAttribute("data-width")) {
        bar.setAttribute("data-width", currentWidth);
        bar.style.width = "0";
    }

    skillObserver.observe(bar);
});


// =========================
// NÚT FACEBOOK
// =========================

const facebookLinks = document.querySelectorAll(
    'a[href*="facebook.com"]'
);

facebookLinks.forEach(function (link) {

    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");

});


// =========================
// HIỆU ỨNG NHẤP NHÁY STATUS
// =========================

const onlineStatus = document.querySelector(".online");

if (onlineStatus) {

    setInterval(function () {

        onlineStatus.classList.toggle("blink");

    }, 1000);

}


// =========================
// HIỆU ỨNG MARQUEE
// =========================

const marqueeTrack = document.querySelector(".marquee-track");

if (marqueeTrack) {

    marqueeTrack.addEventListener("mouseenter", function () {
        marqueeTrack.style.animationPlayState = "paused";
    });

    marqueeTrack.addEventListener("mouseleave", function () {
        marqueeTrack.style.animationPlayState = "running";
    });

}
