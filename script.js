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


const buttonInfo = document.querySelectorAll(".button-info");
const information = document.querySelectorAll(".information");

buttonInfo.forEach((button, index) => {
    button.addEventListener("click", () => {
        information.forEach((info, i) => {
            if (i !== index) {
                info.classList.remove("active");
            }
        });
        information[index].classList.toggle("active");
    });
});


function changeColor(button) {
    if (button.classList.contains('clicked')) {
      button.classList.remove('clicked');
    } else {
      const buttons = document.querySelectorAll('.button-info');
      buttons.forEach((btn) => {
        btn.classList.remove('clicked');
      });
      button.classList.add('clicked');
    }
  }
    document.querySelectorAll('.button-info').forEach((button) => {
    button.addEventListener('click', () => {
      changeColor(button);
    });
  });
  

const Appartment = document.querySelectorAll(".Appartment");
const Deal = document.querySelectorAll(".deal-01");

  if (Deal.length > 0) {
    Deal[0].classList.add("active");
  }
  Appartment.forEach((button, index) => {
      button.addEventListener("click", () => {
        Deal.forEach((info, i) => {
              if (i !== index) {
                  info.classList.remove("active");
              }
          });
          Deal[index].classList.add("active");
      });
  });
  
  function changeColor(button) {
    if (button.classList.contains('clicked')) {
      button.classList.remove('clicked');
    } else {
      const buttons = document.querySelectorAll('.Appartment');
      buttons.forEach((btn) => {
        btn.classList.remove('clicked');
      });  
      button.classList.add('clicked');
    }
  }
    document.querySelectorAll('.Appartment').forEach((button) => {
    button.addEventListener('click', () => {
      changeColor(button);
    });
  });


 let menuHome = document.querySelector('.menu-home');
  menuHome.addEventListener('click', () => {
    let navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  });


  // <!-- Script pour masquer le loader une fois la page chargée -->
  window.addEventListener('load', function() {
    document.getElementById('loader').style.display = 'none';
  });