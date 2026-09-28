document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       1. NÚT SÁNG / TỐI
    ===================================================== */

    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.querySelector(".theme-icon");
    const themeLabel = document.querySelector(".theme-label");


    function setTheme(theme) {

        if (theme === "light") {

            document.body.classList.add("light");

            if (themeIcon) {
                themeIcon.textContent = "🌙";
            }

            if (themeLabel) {
                themeLabel.textContent = "Tối";
            }

        } else {

            document.body.classList.remove("light");

            if (themeIcon) {
                themeIcon.textContent = "☀️";
            }

            if (themeLabel) {
                themeLabel.textContent = "Sáng";
            }
        }

        localStorage.setItem("theme", theme);
    }


    /* Lấy chế độ đã lưu */

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        setTheme("light");
    } else {
        setTheme("dark");
    }


    /* Khi bấm nút */

    if (themeToggle) {

        themeToggle.addEventListener("click", function () {

            const isLight =
                document.body.classList.contains("light");

            if (isLight) {
                setTheme("dark");
            } else {
                setTheme("light");
            }

        });

    }


    /* =====================================================
       2. HIỆU ỨNG CHỮ ĐANG GÕ
    ===================================================== */

    const typedRole = document.getElementById("typedRole");

    if (typedRole) {

        const roles = [
            "Sinh viên Sư phạm Tin học",
            "Sinh viên Sư phạm Toán học",
            "Người yêu công nghệ",
            "Future Teacher"
        ];

        let roleIndex = 0;
        let charIndex = 0;
        let deleting = false;


        function typeEffect() {

            const currentRole = roles[roleIndex];


            if (!deleting) {

                typedRole.textContent =
                    currentRole.substring(0, charIndex + 1);

                charIndex++;


                if (charIndex === currentRole.length) {

                    deleting = true;

                    setTimeout(typeEffect, 1800);

                    return;
                }

            } else {

                typedRole.textContent =
                    currentRole.substring(0, charIndex - 1);

                charIndex--;


                if (charIndex === 0) {

                    deleting = false;

                    roleIndex++;

                    if (roleIndex >= roles.length) {
                        roleIndex = 0;
                    }

                }
            }


            const speed = deleting ? 45 : 90;

            setTimeout(typeEffect, speed);
        }


        typeEffect();
    }


    /* =====================================================
       3. FORM LIÊN HỆ
    ===================================================== */

    const contactForm =
        document.getElementById("contactForm");


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const nameInput =
                    document.getElementById("contactName");

                const emailInput =
                    document.getElementById("contactEmail");

                const subjectInput =
                    document.getElementById("contactSubject");

                const messageInput =
                    document.getElementById("contactMessage");


                const name =
                    nameInput.value.trim();

                const email =
                    emailInput.value.trim();

                const subject =
                    subjectInput.value.trim();

                const message =
                    messageInput.value.trim();


                if (name === "") {

                    alert("Vui lòng nhập họ tên.");

                    nameInput.focus();

                    return;
                }


                if (email === "") {

                    alert("Vui lòng nhập email.");

                    emailInput.focus();

                    return;
                }


                if (subject === "") {

                    alert("Vui lòng nhập chủ đề.");

                    subjectInput.focus();

                    return;
                }


                if (message === "") {

                    alert("Vui lòng nhập nội dung.");

                    messageInput.focus();

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


    /* =====================================================
       4. MENU TỰ ĐỘNG ACTIVE KHI CUỘN
    ===================================================== */

    const sections =
        document.querySelectorAll("section");

    const navLinks =
        document.querySelectorAll(".nav-link");


    function updateActiveMenu() {

        let currentSection = "";


        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 180;

            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");


            const href =
                link.getAttribute("href");


            if (href === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveMenu
    );


    updateActiveMenu();


    /* =====================================================
       5. CUỘN MƯỢT KHI BẤM MENU
    ===================================================== */

    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute("href");


                if (
                    targetId &&
                    targetId.startsWith("#")
                ) {

                    const target =
                        document.querySelector(targetId);


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }

            }
        );

    });


});
