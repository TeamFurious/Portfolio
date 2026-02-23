// Smooth Scroll Reveal Animation
const revealElements = document.querySelectorAll(".server-card, .contact, .servers");

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            el.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// Typing Effect
const text = "Community Builder • Server Owner • Digital Visionary";
const typingElement = document.querySelector(".hero p");

let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

typingElement.innerHTML = "";
typeEffect();


// Floating Particle Background
const bg = document.querySelector(".bg-animation");

for (let i = 0; i < 30; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "vw";
    particle.style.animationDuration = (Math.random() * 5 + 5) + "s";
    particle.style.opacity = Math.random();

    bg.appendChild(particle);
}
