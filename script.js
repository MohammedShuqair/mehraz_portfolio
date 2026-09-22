const yearNode = document.getElementById("year");
const headerNode = document.querySelector(".site-header");
const navToggleNode = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav-list a");

document.documentElement.classList.add("js");

if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
}

if (headerNode && navToggleNode) {
    navToggleNode.addEventListener("click", () => {
        const isOpen = headerNode.classList.toggle("is-open");
        navToggleNode.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            headerNode.classList.remove("is-open");
            navToggleNode.setAttribute("aria-expanded", "false");
        });
    });
}