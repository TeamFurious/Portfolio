document.addEventListener("mousemove", function(e) {
    const card = document.querySelector(".card");
    let x = (window.innerWidth / 2 - e.pageX) / 40;
    let y = (window.innerHeight / 2 - e.pageY) / 40;
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
