var header = document.getElementById('myHeader');
let timer;
let mouseOnHeader = false;

window.addEventListener('mousemove', function(event) {
  if (event.clientY < 50) {
    mouseOnHeader = true;
    header.classList.remove('hide');
  } else {
    mouseOnHeader = false;
  }
});

window.addEventListener('scroll', function() {
  clearTimeout(timer);

  header.classList.remove('hide');

  timer = setTimeout(function() {
    if (window.scrollY !== 0 && !mouseOnHeader) {
      header.classList.add('hide');
    }
  }, 2000);
});

if (window.scrollY !== 0) {
  header.classList.add('hide');
}

// --------------------------------- //

let bar = document.querySelector('.bar');
let slideWindowLeft = document.querySelector('.left_side');
let isSlideVisibleLeft = false;

bar.addEventListener('click', function(event){
  event.stopPropagation();
  isSlideVisibleLeft = !isSlideVisibleLeft;

  if(isSlideVisibleLeft){
      slideWindowLeft.style.transform = 'translateX(0)';
      // slideWindow.style.opacity = '1';
      slideWindowLeft.style.zIndex = '1100';
  }else{
      slideWindowLeft.style.transform = 'translateX(-100%)';
      // slideWindow.style.opacity = '0';
      slideWindowLeft.style.zIndex = '1100';
  }
})

// --------------------------------- //

let cart = document.querySelector('.cart_summary');
let slideWindowRight = document.querySelector('.right_side');
let isSlideVisibleRight = false;

cart.addEventListener('click', function(event){
    event.stopPropagation();
    isSlideVisibleRight = !isSlideVisibleRight;

    if(isSlideVisibleRight){
        slideWindowRight.style.transform = 'translateX(0)';
        // slideWindow.style.opacity = '1';
        slideWindowRight.style.zIndex = '1100';
    }else{
        slideWindowRight.style.transform = 'translateX(100%)';
        // slideWindow.style.opacity = '0';
        slideWindowRight.style.zIndex = '1100';
    }
})


// --------------------------------- //

// let productsNav = document.getElementById('products_nav');
// let productsDropdown = document.getElementById('products_dropdown');

// let isProductsDropdownVisible = false;

// productsNav.addEventListener('click', function(event){
//   event.stopPropagation();
//   isProductsDropdownVisible = !isProductsDropdownVisible;

//   if(isProductsDropdownVisible){
//     // productsDropdown.style.display = 'block';
//     productsDropdown.style.transform = 'translateY(0)';
//     productsDropdown.style.opacity = '1';
//     productsDropdown.style.zIndex = "1";
//   }else{
//     // productsDropdown.style.display = 'none';
//     productsDropdown.style.transform = 'translateY(-220%)';
//     productsDropdown.style.opacity = '0';
//     productsDropdown.style.zIndex = "1";
//   }
// })

// document.addEventListener('click', function(event) {
//   if (isProductsDropdownVisible && !productsNav.contains(event.target) && !productsDropdown.contains(event.target)) {
//       isProductsDropdownVisible = false;
//       // dropdown.style.visibility = 'hidden';
//       productsDropdown.style.transform = 'translateY(-10px)';
//       productsDropdown.style.opacity = '0';
//       productsDropdown.style.zIndex = "1100";
//   }
// });

// --------------------------------- //

// let newsNav = document.getElementById('news_nav');
// let newsDropdown = document.getElementById('news_dropdown');

// let isNewsDropdownVisible = false;

// newsNav.addEventListener('click', function(event){
//   event.stopPropagation();
//   isNewsDropdownVisible = !isNewsDropdownVisible;

//   if(isNewsDropdownVisible){
//     // productsDropdown.style.display = 'block';
//     newsDropdown.style.transform = 'translateY(0)';
//     newsDropdown.style.opacity = '1';
//     newsDropdown.style.zIndex = "1100";
//   }else{
//     // productsDropdown.style.display = 'none';
//     newsDropdown.style.transform = 'translateY(-10px)';
//     newsDropdown.style.opacity = '0';
//     newsDropdown.style.zIndex = "1000";
//   }
// })

// document.addEventListener('click', function(event) {
//   if (isNewsDropdownVisible && !newsNav.contains(event.target) && !newsDropdown.contains(event.target)) {
//       isNewsDropdownVisible = false;
//       // dropdown.style.visibility = 'hidden';
//       newsDropdown.style.transform = 'translateY(-10px)';
//       newsDropdown.style.opacity = '0';
//       newsDropdown.style.zIndex = "1000";
//   }
// });

// --------------------------------- //

// let productsNavDpd = document.getElementById('products_nav_dpd');
// let productsDropdownDpd = document.getElementById('products_dropdown_dpd');

// let isProductsDropdownDpdVisible = false;

// productsNavDpd.addEventListener('click', function(event){
//   event.stopPropagation();
//   isProductsDropdownDpdVisible = !isProductsDropdownDpdVisible;

//   if(isProductsDropdownDpdVisible){
//     // productsDropdown.style.display = 'block';
//     productsDropdownDpd.style.transform = 'translateY(0)';
//     productsDropdownDpd.style.opacity = '1';
//     productsDropdownDpd.style.zIndex = "1100";
//   }else{
//     // productsDropdown.style.display = 'none';
//     productsDropdownDpd.style.transform = 'translateY(-10px)';
//     productsDropdownDpd.style.opacity = '0';
//     productsDropdownDpd.style.zIndex = "1100";
//   }
// })

// document.addEventListener('click', function(event) {
//   if (isProductsDropdownVisibleDpd && !productsNavDpd.contains(event.target) && !productsDropdownDpd.contains(event.target)) {
//       isProductsDropdownVisibleDpd = false;
//       // dropdown.style.visibility = 'hidden';
//       productsDropdownDpd.style.transform = 'translateY(-10px)';
//       productsDropdownDpd.style.opacity = '0';
//       productsDropdownDpd.style.zIndex = "1100";
//   }
// });

// --------------------------------- //

// let newsNavDpd = document.getElementById('news_nav_dpd');
// let newsDropdownDpd = document.getElementById('news_dropdown_dpd');

// let isNewsDropdownDpdVisible = false;

// newsNavDpd.addEventListener('click', function(event){
//   event.stopPropagation();
//   isNewsDropdownDpdVisible = !isNewsDropdownDpdVisible;

//   if(isNewsDropdownDpdVisible){
//     // productsDropdown.style.display = 'block';
//     newsDropdownDpd.style.transform = 'translateY(0)';
//     newsDropdownDpd.style.opacity = '1';
//     newsDropdownDpd.style.zIndex = "1100";
//   }else{
//     // productsDropdown.style.display = 'none';
//     newsDropdownDpd.style.transform = 'translateY(-10px)';
//     newsDropdownDpd.style.opacity = '0';
//     newsDropdownDpd.style.zIndex = "1000";
//   }
// })

// document.addEventListener('click', function(event) {
//   if (isNewsDropdownDpdVisible && !newsNav.contains(event.target) && !newsDropdownDpd.contains(event.target)) {
//       isNewsDropdownDpdVisible = false;
//       // dropdown.style.visibility = 'hidden';
//       newsDropdownDpd.style.transform = 'translateY(-10px)';
//       newsDropdownDpd.style.opacity = '0';
//       newsDropdownDpd.style.zIndex = "1000";
//   }
// });





// --------------------------------- //

let numberJuniperCart = document.getElementById('number_juniper_cart');
let decrementJuniperCart = document.getElementById('decrement_juniper_cart');
let incrementJuniperCart = document.getElementById('increment_juniper_cart');

decrementJuniperCart.addEventListener('click', function() {
    numberJuniperCart.value = Number(numberJuniperCart.value) - 1;
});

incrementJuniperCart.addEventListener('click', function() {
    numberJuniperCart.value = Number(numberJuniperCart.value) + 1;
});


let numberAtlasCart = document.getElementById('number_atlas_cart');
let decrementAtlasCart = document.getElementById('decrement_atlas_cart');
let incrementAtlasCart = document.getElementById('increment_atlas_cart');

decrementAtlasCart.addEventListener('click', function() {
    numberAtlasCart.value = Number(numberAtlasCart.value) - 1;
});

incrementAtlasCart.addEventListener('click', function() {
    numberAtlasCart.value = Number(numberAtlasCart.value) + 1;
});

// --------------------------------- //

$(document).ready(function(){
  $(".small_link a").hover(function(){
    $(".small_link a").not(this).css("color", "rgb(255,255,255)");
  }, function(){
    $(".small_link a").css("color", "black");
  });
});







  

  
