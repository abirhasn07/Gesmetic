const swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });


const navlist=document.querySelector(".nav-list")


const showMenu=()=>{
    navlist.classList.toggle("active")
}


// gsap 


// TweenMax.from('.navbar',1,{
//   delay:0,
//   x:-10,
//   opacity:0,
//   ease:Expo.easeInOut
//   })
// TweenMax.from('.slide-img',2,{
//   delay:0,
//   x:-70,
//   opacity:0,
//   ease:Expo.easeInOut
//   })
// TweenMax.from('.slide-subtitle',3,{
//   delay:.5,
//   y:20,
//   opacity:0,
//   ease:Expo.easeInOut
//   })
// TweenMax.from('.slide-title',3,{
//   delay:.8,
//   y:40,
//   opacity:0,
//   ease:Expo.easeInOut
//   })
// TweenMax.from('.slide-caption',3,{
//   delay:1,
//   y:60,
//   opacity:0,
//   ease:Expo.easeInOut
//   })
// TweenMax.from('.slide-btn',3,{
//   delay:1.2,
//   y:80,
//   opacity:0,
//   ease:Expo.easeInOut
//   })
// gsap 