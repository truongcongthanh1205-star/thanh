/* =========================================================
   TRUONG CONG THANH - PERSONAL PORTFOLIO
   SCRIPT.JS
   ========================================================= */


/* =========================
   DARK / LIGHT MODE
   ========================= */

const themeToggle = document.getElementById("themeToggle");

const themeIcon = document.querySelector(".theme-icon");

const themeLabel = document.querySelector(".theme-label");


function updateThemeButton() {

    const isDark =
        document.body.classList.contains("dark");

    if (isDark) {

        if (themeIcon) {
            themeIcon.textContent = "☀️";
        }

        if (themeLabel) {
            themeLabel.textContent = "Sáng";
        }

    } else {

        if (themeIcon) {
            themeIcon.textContent = "🌙";
        }

        if (themeLabel) {
            themeLabel.textContent = "Tối";
        }
    }
}


const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.remove("dark");

} else {

    document.body.classList.add("dark");

}


updateThemeButton();


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        function () {

            document.body.classList.toggle("dark");

            const isDark =
                document.body.classList.contains("dark");

            localStorage.setItem(
                "theme",
                isDark ? "dark" : "light"
            );

            updateThemeButton();

        }
    );

}


/* =========================
   HIỆU ỨNG GÕ CHỮ
   ========================= */

const typedRole =
    document.getElementById("typedRole");


const roles = [

    "Sinh viên Sư phạm Tin học",

    "Sinh viên Sư phạm Toán học",

    "Người yêu thích công nghệ",

    "Người yêu thích lập trình"

];


let roleIndex = 0;

let charIndex = 0;

let deleting = false;


function typingEffect() {

    if (!typedRole) {
        return;
    }


    const currentRole =
        roles[roleIndex];


    if (!deleting) {

        typedRole.textContent =
            currentRole.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            currentRole.length
        ) {

            deleting = true;

            setTimeout(
                typingEffect,
                1800
            );

            return;
        }


    } else {

        typedRole.textContent =
            currentRole.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (
                roleIndex >=
                roles.length
            ) {

                roleIndex = 0;

            }

        }

    }


    const speed =
        deleting ? 50 : 90;


    setTimeout(
        typingEffect,
        speed
    );
}


typingEffect();


/* =========================
   FORM LIÊN HỆ
   ========================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const nameInput =
                document.getElementById(
                    "contactName"
                );


            const name =
                nameInput.value.trim();


            if (name === "") {

                alert(
                    "Vui lòng nhập họ và tên!"
                );

                return;
            }


            alert(
                "Cảm ơn " +
                name +
                "! Tin nhắn của bạn đã được ghi nhận."
            );


            contactForm.reset();

        }
    );

}


/* =========================
   MENU ACTIVE
   ========================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


function updateActiveMenu() {

    let currentSection = "";


    sections.forEach(
        function (section) {

            const sectionTop =
                section.offsetTop - 200;


            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >=
                    sectionTop &&

                window.scrollY <
                    sectionTop +
                    sectionHeight
            ) {

                currentSection =
                    section.getAttribute(
                        "id"
                    );

            }

        }
    );


    navLinks.forEach(
        function (link) {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute(
                    "href"
                ) ===
                "#" + currentSection
            ) {

                link.classList.add(
                    "active"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    updateActiveMenu
);


updateActiveMenu();


/* =========================
   CUỘN MƯỢT MENU
   ========================= */

navLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    !targetId ||
                    !targetId.startsWith("#")
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
                        behavior: "smooth"
                    });

                }

            }
        );

    }
);


/* =========================
   HIỆU ỨNG ONLINE
   ========================= */

const online =
    document.querySelector(".online");


if (online) {

    setInterval(
        function () {

            online.classList.toggle(
                "blink"
            );

        },
        1000
    );

}


/* =========================
   THANH KỸ NĂNG
   ========================= */

const progressBars =
    document.querySelectorAll(
        ".progress-bar"
    );


const progressObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        const bar =
                            entry.target;


                        const width =
                            bar.getAttribute(
                                "data-width"
                            );


                        if (width) {

                            bar.style.width =
                                width;

                        }


                        progressObserver.unobserve(
                            bar
                        );

                    }

                }
            );

        },
        {
            threshold: 0.3
        }
    );


progressBars.forEach(
    function (bar) {

        progressObserver.observe(
            bar
        );

    }
);


/* =========================
   HIỆU ỨNG MARQUEE
   ========================= */

const marquee =
    document.querySelector(
        ".marquee-track"
    );


if (marquee) {

    marquee.addEventListener(
        "mouseenter",
        function () {

            marquee.style.animationPlayState =
                "paused";

        }
    );


    marquee.addEventListener(
        "mouseleave",
        function () {

            marquee.style.animationPlayState =
                "running";

        }
    );

}


/* =========================
   LINK FACEBOOK
   ========================= */

const facebookLinks =
    document.querySelectorAll(
        'a[href*="facebook.com"]'
    );


facebookLinks.forEach(
    function (link) {

        link.setAttribute(
            "target",
            "_blank"
        );

        link.setAttribute(
            "rel",
            "noopener noreferrer"
        );

    }
);
