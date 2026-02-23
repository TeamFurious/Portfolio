// Wait until page loads
window.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".card");

    // Fade-in effect
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    setTimeout(() => {
        card.style.transition = "all 1s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, 200);
});


// 3D Tilt Effect
document.addEventListener("mousemove", (e) => {
    const card = document.querySelector(".card");

    let xAxis = (window.innerWidth / 2 - e.pageX) / 30;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 30;

    card.style.transform = `
        rotateY(${xAxis}deg)
        rotateX(${yAxis}deg)
    `;
});


// Reset tilt when mouse leaves
document.addEventListener("mouseleave", () => {
    const card = document.querySelector(".card");
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
});


// Dynamic glitch intensity change
setInterval(() => {
    const glitch = document.querySelector(".glitch");
    glitch.style.textShadow = `
        ${Math.random() * 3}px ${Math.random() * 3}px #8a2be2,
        ${-Math.random() * 3}px ${-Math.random() * 3}px #ff00ff
    `;
}, 200);
