// =========================
// Apple Portfolio Script
// =========================

// Loading Screen
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 800);
});


// Scroll Progress Bar

window.addEventListener("scroll", () => {

    const winScroll =
        document.documentElement.scrollTop ||
        document.body.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (winScroll / height) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";

});


// Fade In Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.15
});


document.querySelectorAll(".section,.card").forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all .8s ease";

    observer.observe(item);

});


// Active Navigation

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});


// Hero Image Floating Effect

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("mousemove", (e) => {

    let x = (window.innerWidth / 2 - e.pageX) / 60;
    let y = (window.innerHeight / 2 - e.pageY) / 60;

    heroImage.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

window.addEventListener("mouseleave", () => {

    heroImage.style.transform = "rotateY(0deg) rotateX(0deg)";

});


// Card Hover Glow

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,#2b2b2b,#151515)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "#151515";

    });

});
