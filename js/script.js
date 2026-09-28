// =========================
// DARK / LIGHT MODE
// =========================

const themeButton = document.getElementById("theme-toggle");


// Kiểm tra chế độ đã lưu
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeButton.textContent = "☀️";
} else {
    themeButton.textContent = "🌙";
}


// Đổi giao diện
themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

        themeButton.textContent = "☀️";

    } else {

        localStorage.setItem("theme", "light");

        themeButton.textContent = "🌙";

    }

});


// =========================
// FORM LIÊN HỆ
// =========================

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;

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


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

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

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});
