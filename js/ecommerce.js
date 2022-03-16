/* home swiper */
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
/* new swiper */
var newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 16,
  slidesPerView: 'auto',
  centeredSlides : true,
  loop: 'true',

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/*show menu */
let navMenu = document.getElementById('nav-menu');
let navToggle = document.getElementById('nav-toggle');
let navClose = document.getElementById('nav-close');
 
if(navToggle){
  navToggle.addEventListener('click',()=>{
    navMenu.classList.add('show-menu');
  })
}
if(navClose){
  navClose.addEventListener('click',()=>{
    navMenu.classList.remove('show-menu');
  })
}
  /* change background header */

function scrollHeader(){
  let header = document.getElementById('header')
  if(this.scrollY >= 50){
   header.classList.add('scroll-header'); 
    } 
     else header.classList.remove('scroll-header');
  
};
window.addEventListener('scroll', scrollHeader);

/*show cart */

let cart = document.getElementById('cart');
let cartShop = document.getElementById('cart-shop');
let cartClose = document.getElementById('cart__close');


if(cartShop){
  cartShop.addEventListener("click",()=>{
    cart.classList.toggle('show-cart');
  })
}
if(cartClose){
  cartClose.addEventListener("click",()=>{
    cart.classList.remove('show-cart');
  })
}
/*show login */

let login = document.getElementById('login');
let loginButton = document.getElementById('login-button');
let loginClose = document.getElementById('login-close');

if(loginButton){
  loginButton.addEventListener("click",()=>{
    login.classList.toggle('show-login');
  })
}
if(loginClose){
  loginClose.addEventListener("click",()=>{
    login.classList.remove('show-login');
  })
}

/* show scroll up */

function scrollUp(){
  let scrollUP = document.getElementById('scroll-up');
  if(this.scrollY >= 150){
    scrollUP.classList.add('show-scroll');
  }else{
    scrollUP.classList.remove('show-scroll');
  }

}

window.addEventListener('scroll',scrollUp);

/*Question Accordion */

let accordionItem = document.querySelectorAll('.questions__item')

accordionItem.forEach((item) =>{
  let accordionHeader = item.querySelector('.questions__header')
  
  accordionHeader.addEventListener('click',() =>{
   
    let openItem = document.querySelector('.accordion-open')
   
    toggleItem(item)
     if(openItem && openItem !== item){
       toggleItem(openItem); // افتح ويغلق الثانية 
     }
    })
  })

  let toggleItem = (item) =>{
    let accordionContent = item.querySelector('.questions__content')

    if(item.classList.contains('accordion-open')){
      accordionContent.removeAttribute('style')// لو لغبتها يعيطي لون ثم الضغطة الثانية  يلغيها
     item.classList.remove('accordion-open') // لو لغيتها راح يعمل لي بس ولاكن عند الإغلاق يتم بقاء ال الخلفية موجودة

     }else{

       accordionContent.style.height = accordionContent.scrollHeight + 'px'
       
       item.classList.add('accordion-open')
     }
    // accordionContent.style.height = accordionContent.scrollHeight + 'px'
    // item.classList.add('accordion-open')
  }

  /* lightbox */



  let productItems =document.querySelectorAll(".product__img");
   let prevItem =document.querySelector(".prev__item"),
       nextItem =document.querySelector(".next__item"),

    totalProductItems = productItems.length,
    lightbox = document.querySelector(".lightbox"),
    lightboxImg = lightbox.querySelector(".lightbox__img"),
    lightboxClose =lightbox.querySelector(".lightbox__close"),
    lightboxCounter = lightbox.querySelector(".caption__counter");

    let itemIndex = 0;

    for(let i=0; i<totalProductItems; i++) {
      // console.log(productItem[i])
      productItems[i].addEventListener("click",() => {
        itemIndex= i ;

        changeItem();
        toggleLightbox();
      })
    }

  

    onclick = function (){

    }

    function toggleLightbox(){
      lightbox.classList.toggle("open");
    }
      
    function changeItem(){
      imgSrc = productItems[itemIndex].querySelector(".product__img img").getAttribute("src");
      lightboxImg.src = imgSrc; 
      
      lightboxCounter.innerHTML = (itemIndex + 1) + " of " + totalProductItems;
      console.log(imgSrc);
    }
     // close lightbox 

     lightbox.addEventListener("click",() => {
       if(event.target === lightboxClose || event.target === lightbox){
         toggleLightbox();
       }
     })

    nextItem.onclick = () => {
      if(itemIndex === totalProductItems-1){
        itemIndex =0;
      }else{
        itemIndex++;
      }
      changeItem();
     console.log(itemIndex);
    }

    prevItem.onclick = () => {
      if(itemIndex === 0){
        itemIndex =totalProductItems-1;
      }else{
        itemIndex--;
      }
      changeItem();
     console.log(itemIndex);
    }



    const link = document.querySelector('a');
    
    console.log(link.getAttribute('href'));

    /*style__switcher*/
  //    const styleSwitcherToggle = document.querySelector(".style__switcher-toggler");

  //    styleSwitcherToggle.addEventListener("click", () => {
  //      document.querySelector(".style__switcher").classList.toggle("open");
  //    })

  //    window.addEventListener('scroll', () =>{
  //      if(document.querySelector(".style__switcher").classList.contains("open")){
  //      document.querySelector(".style__switcher").classList.remove("open");
  //   }
  //  })

    // // THEME COLORS

    // function themeColors(){
    //   let colorStyle = document.querySelector(".js-color-style"),
    //       themeColorsContainer = document.querySelector(".js-theme-color-item");
       
    //       themeColorsContainer.addEventListener("click" , ({target}) =>{
    //         if(target.classList.contains("js-theme-color-item")) {
    //             console.log(target.getAttribute("data-js-theme-color"));

    //             localStorage.setItem("color" ,target.getAttribute("data-js-theme-color"));
    //             setColors();
    //         }
    //       })
    //       function setColors(){
    //         let path = colorStyle.getAttribute("href").split("/");
    //           path = path.slice(0 , path.length - 1 );
    //           colorStyle.setAttribute("href", path.join("/") + "/" + localStorage.getItem("color") + ".css");

    //           console.log(path);
    //           if(document.querySelector("js-theme-color-item.active")){
    //             document.querySelector(".js-theme-color-item.active").classList.remove("active");
    
    //           }
    //           document.querySelector("[data-js-theme-color=" + localStorage.getItem("color") + "]").classList.add("active");
    //       }

    //       if(localStorage.getItem("color") !== null){
    //         setColors();
    //       }else{
    //         let defaultColor = colorStyle.getAttribute("href").split("/").pop().split(".").shift();
    //         document.querySelector("[data-js-theme-color" + defaultColor + "]").classList.add("active")
    //         console.log(defaultColor);
    //       }
    // }

    // themeColors();

/*
    document.querySelector(".bx-minus").setAttribute("disabled", "disabled");
    let valueCount

    document.querySelector(".bx-plus").addEventListener("click", () => {

      valueCount = document.getElementById("qunatity").value;
     
      valueCount++;

      document.getElementById("qunatity").value = valueCount;
      
    })
    */

    // let scales = document.getElementById("scales");

    // scales.onclick = () => {
    //   scales.style.backgroundColor = "red";
    // }

