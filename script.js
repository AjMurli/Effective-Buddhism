
  // Theme
  var icon = document.getElementById("icon");
  
  icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      icon.src ="/assets/moon.png"
    }
    else {
      icon.src ="/assets/sun.png"
    }
  }


  // slide show
  document.addEventListener("DOMContentLoaded", function() {
    const slideshowImages = document.querySelectorAll(".slideshow-image");
    let currentIndex = 0;
    function showNextImage() {
      slideshowImages[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % slideshowImages.length;
      slideshowImages[currentIndex].classList.add("active");
    }
    setInterval(showNextImage, 3000); // Change image every 3 seconds (adjust the duration as needed)
  });
  



























  
  
//   // slider 1
//   const slides0 = document.querySelectorAll(".slide0");
  
//   counter0 = 0;
  
//   slides0.forEach((slide, index) => {
//     slide.style.left = `${index * 56}%`;
//   }
//   )
  
//   const slideImage0 = () => {
//     slides0.forEach((slide) => {
//       slide.style.transform = `translateX(-${counter0 * 100}%)`;
//     })
//   };
  
//   setInterval(() => {
//     slideImage0();
//     counter0++;
//     for (var i = 0; i <= 4; i++) {
//       setTimeout(() => {
//         slideImage0();
//       }, 1000);
//       if (counter0 == 4) {
//         counter0 = 0;
//       }
//     }
//   }, 3200)
  
  
//   //  slider 2
//   const slides = document.querySelectorAll(".slide");
  
//   counter = 0;
  
//   slides.forEach((slide, index) => {
//     slide.style.left = `${index * 56}%`;
//   }
//   )
  
//   const slideImage = () => {
//     slides.forEach((slide) => {
//       slide.style.transform = `translateX(-${counter * 100}%)`;
//     })
//   };
  
//   setInterval(() => {
//     slideImage();
//     counter++;
//     for (var i = 0; i <= 4; i++) {
//       setTimeout(() => {
//         slideImage1();
//       }, 2000);
//       if (counter == 4) {
//         counter = 0;
//       }
//     }
//   }, 3000)
  
//   //  slider 3
//   const slides1 = document.querySelectorAll(".slide1");
  
//   counter1 = 0;
  
//   slides1.forEach((slide, index) => {
//     slide.style.left = `${index * 56}%`;
//   }
//   )
  
//   const slideImage1 = () => {
//     slides1.forEach((slide) => {
//       slide.style.transform = `translateX(-${counter1 * 100}%)`;
//     })
//   };
  
//   setInterval(() => {
//     slideImage1();
//     counter1++;
//     for (var i = 0; i <= 3; i++) {
//       setTimeout(() => {
//         slideImage1();
//       }, 1000);
  
//       if (counter1 == 3) {
//         counter1 = 0;
//       }
//     }
  
//   }, 2900)
  