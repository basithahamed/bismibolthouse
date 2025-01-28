document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.getElementById("hero");

    const images = [
        "./src/assets/bg1.jpg",
        "./src/assets/bg2.jpg",
        "./src/assets/silver-nails.jpg"
    ];

    let currentIndex = 0;

    function changeBackground() {
        heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Change background every 5 seconds
    setInterval(changeBackground, 4000);
});
