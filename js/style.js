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
    } else {
        // dropdown.style.visibility = 'hidden';
        dropdown.style.transform = 'translateY(-10px)';
        dropdown.style.opacity = '0';
        bar.classList.remove('hovered');
    }
});

document.addEventListener('click', function(event) {
    if (isDropdownVisible && !bar.contains(event.target) && !dropdown.contains(event.target)) {
        isDropdownVisible = false;
        // dropdown.style.visibility = 'hidden';
        dropdown.style.transform = 'translateY(-10px)';
        dropdown.style.opacity = '0';
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
    }else{
        slideWindow.style.transform = 'translateX(10px)';
        slideWindow.style.opacity = '0';
    }
})






  

  
