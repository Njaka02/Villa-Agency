const sliderTabs = document.querySelectorAll(".slider-tab");
const sliderIndicator = document.querySelector(".slider-indicator")
  

// Initialize swiper instance
const swiper = new Swiper(".slider-container", {
    effect: "fade",
    speed: 1000,
    // autoplay: { delay: 4000 }
    navigation: {
        prevEl: "#slide-prev",
        nextEl: "#slide-next"
    }
});

// Update the slide on tab click
sliderTabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        swiper.slideTo(index)
    });
});

swiper.on("slideChange", () => {
    const currentIndex = swiper.activeIndex;
    sliderTabs[currentIndex].checked = true;
});