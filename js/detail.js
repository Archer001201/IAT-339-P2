document.addEventListener('DOMContentLoaded', function() {
    var dropdownToggle = document.querySelector('.dropdown_toggle');
    var dropdownMenu = document.querySelector('.dropdown_infor');
  
    dropdownToggle.addEventListener('click', function() {
      dropdownMenu.classList.toggle('collapsed');
    });
  });
// -------------------------------------------------------
const images = document.querySelectorAll('.carousel-image');
const buttons = document.querySelectorAll('.dot');

function updateCarousel(imageIndex) {
  images.forEach((image, index) => {
    if (index === imageIndex) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    updateCarousel(index);
  });
});

// 设置初始图片
updateCarousel(0);
