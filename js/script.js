// ================================
// HOSTEL WEBSITE JAVASCRIPT
// ================================

document.addEventListener("DOMContentLoaded", function () {

    // ================================
    // MOBILE MENU TOGGLE
    // ================================
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", function () {
            navLinks.classList.toggle("show");
        });
    }

    // ================================
    // SMOOTH SCROLL FOR LINKS
    // ================================
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // ================================
    // CONTACT FORM ALERT
    // ================================
    const contactForm = document.querySelector("form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            alert("Thank you! Your message has been sent.");

            contactForm.reset();
        });
    }

    // ================================
    // SCROLL TO TOP BUTTON
    // ================================
    const topBtn = document.createElement("button");
    topBtn.innerHTML = "↑";
    topBtn.id = "topBtn";
    document.body.appendChild(topBtn);

    topBtn.style.position = "fixed";
    topBtn.style.bottom = "20px";
    topBtn.style.right = "20px";
    topBtn.style.padding = "10px 15px";
    topBtn.style.border = "none";
    topBtn.style.borderRadius = "8px";
    topBtn.style.background = "#0d6efd";
    topBtn.style.color = "#fff";
    topBtn.style.fontSize = "20px";
    topBtn.style.cursor = "pointer";
    topBtn.style.display = "none";
    topBtn.style.zIndex = "999";

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // ================================
    // ACTIVE NAV LINK ON SCROLL
    // ================================
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", function () {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navItems.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });

});