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
let dropdown = document.querySelector('.dropdown_content_large');

let isDropdownVisible = false;

bar.addEventListener('mouseenter', function() {
    bar.classList.add('hovered');
});

bar.addEventListener('click', function(event) {
    event.stopPropagation();
    isDropdownVisible = !isDropdownVisible;
    
    if (isDropdownVisible) {
        // dropdown.style.visibility = 'visible';
        dropdown.style.transform = 'translateY(0)';
        dropdown.style.opacity = '1';
        dropdown.style.zIndex = '1100';
    } else {
        // dropdown.style.visibility = 'hidden';
        dropdown.style.transform = 'translateY(-10px)';
        dropdown.style.opacity = '0';
        dropdown.style.zIndex = '1000';
        bar.classList.remove('hovered');
    }
});

document.addEventListener('click', function(event) {
    if (isDropdownVisible && !bar.contains(event.target) && !dropdown.contains(event.target)) {
        isDropdownVisible = false;
        // dropdown.style.visibility = 'hidden';
        dropdown.style.transform = 'translateY(-10px)';
        dropdown.style.opacity = '0';
        dropdown.style.zIndex = '1000';
    }
});

// --------------------------------- //

let cart = document.querySelector('.cart_summary');
let slideWindow = document.querySelector('.slide_window');
let isSlideVisible = false;

cart.addEventListener('click', function(event){
    event.stopPropagation();
    isSlideVisible = !isSlideVisible;

    if(isSlideVisible){
        slideWindow.style.transform = 'translateX(0)';
        slideWindow.style.opacity = '1';
        slideWindow.style.zIndex = '1100';
    }else{
        slideWindow.style.transform = 'translateX(10px)';
        slideWindow.style.opacity = '0';
        slideWindow.style.zIndex = '1000';
    }
})


// --------------------------------- //

let productsNav = document.getElementById('products_nav');
let productsDropdown = document.getElementById('products_dropdown');

let isProductsDropdownVisible = false;

productsNav.addEventListener('click', function(event){
  event.stopPropagation();
  isProductsDropdownVisible = !isProductsDropdownVisible;

  if(isProductsDropdownVisible){
    // productsDropdown.style.display = 'block';
    productsDropdown.style.transform = 'translateY(0)';
    productsDropdown.style.opacity = '1';
    productsDropdown.style.zIndex = "1100";
  }else{
    // productsDropdown.style.display = 'none';
    productsDropdown.style.transform = 'translateY(-10px)';
    productsDropdown.style.opacity = '0';
    productsDropdown.style.zIndex = "1100";
  }
})

document.addEventListener('click', function(event) {
  if (isProductsDropdownVisible && !productsNav.contains(event.target) && !productsDropdown.contains(event.target)) {
      isProductsDropdownVisible = false;
      // dropdown.style.visibility = 'hidden';
      productsDropdown.style.transform = 'translateY(-10px)';
      productsDropdown.style.opacity = '0';
      productsDropdown.style.zIndex = "1100";
  }
});

// --------------------------------- //

let newsNav = document.getElementById('news_nav');
let newsDropdown = document.getElementById('news_dropdown');

let isNewsDropdownVisible = false;

newsNav.addEventListener('click', function(event){
  event.stopPropagation();
  isNewsDropdownVisible = !isNewsDropdownVisible;

  if(isNewsDropdownVisible){
    // productsDropdown.style.display = 'block';
    newsDropdown.style.transform = 'translateY(0)';
    newsDropdown.style.opacity = '1';
    newsDropdown.style.zIndex = "1100";
  }else{
    // productsDropdown.style.display = 'none';
    newsDropdown.style.transform = 'translateY(-10px)';
    newsDropdown.style.opacity = '0';
    newsDropdown.style.zIndex = "1000";
  }
})

document.addEventListener('click', function(event) {
  if (isNewsDropdownVisible && !newsNav.contains(event.target) && !newsDropdown.contains(event.target)) {
      isNewsDropdownVisible = false;
      // dropdown.style.visibility = 'hidden';
      newsDropdown.style.transform = 'translateY(-10px)';
      newsDropdown.style.opacity = '0';
      newsDropdown.style.zIndex = "1000";
  }
});




  

  