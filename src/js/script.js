document.addEventListener("DOMContentLoaded", function () {
    const slideshowImage = document.getElementById("slideshow-image");

    const images = [
        "./src/assets/bg1.jpg",
        "./src/assets/bg2.jpg",
        "./src/assets/silver-nails.jpg"
    ];

    let currentIndex = 0;

    function changeImage() {
        slideshowImage.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Change image every 4 seconds
    setInterval(changeImage, 4000);
});