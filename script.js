//Page3 Animation -------------------------------------------------------------------
function page3Animation() {
  const eleC = document.querySelector("#elem-container");
  var fixed = document.querySelector("#fixed-img");

  eleC.addEventListener("mouseenter", function() {
    fixed.style.display = "block";
  })
  eleC.addEventListener("mouseleave", function() {
    fixed.style.display = "none";
  })

  var elems = document.querySelectorAll(".elem");
  var fixed = document.getElementById("fixed-img");

  elems.forEach(function(e) {
    e.addEventListener("mouseenter", function() {
      var image = e.getAttribute("data-image");
      var video = e.getAttribute("data-video");

      if (video) {
        // If there is a video, add a video element to fixed-img
        fixed.innerHTML = `
            <video autoplay muted loop playsinline>
                <source src="${video}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
      } else if (image) {
        // If there is an image, use it as the background image
        fixed.style.backgroundImage = `url(${image})`;
        fixed.innerHTML = "";  // Remove any video element if present
      }
    
      fixed.style.display = 'block'; // Ensure the fixed-img is visible
    });
    
    e.addEventListener("mouseleave", function() {
      fixed.style.display = 'none'; // Hide the fixed-img when the mouse leaves
    });
  })
}

page3Animation();

//Swiper logic ---------------------------------------------------------------------------
function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}

swiperAnimation();

//Responsive ------------------------------------------------------------------------------
function menuAnimation () {
  var menu = document.querySelector("nav h3");
  var full = document.querySelector("#full-scr");
  var navimg = document.querySelector("nav img");
  var flag = 0;

  menu.addEventListener("click", function() {
    if(flag == 0) {
      full.style.top = 0;
      navimg.style.opacity = 0;
      flag = 1;
    }
    else {
      full.style.top = "-100%";
      navimg.style.opacity = 1;
      flag = 0;
    }
  });
}

menuAnimation();

//Starting Loader Animation ----------------------------------------------------------------
function loaderAnimation () {
  var loader = document.querySelector("#loader")
  setTimeout(function() {
    loader.style.top = "-100%";
  }, 4200);
}

loaderAnimation();

//locomotive for smooth scrolling -----------------------------------------------------------
function locomotive() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
  });
}
locomotive();