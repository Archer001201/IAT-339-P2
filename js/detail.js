
// detail dropdown

// 获取相关元素
const toggleButton = document.querySelector('.dropdown_toggle');
const dropdownInfo = document.querySelector('.dropdown_infor');
// const plusIcon = document.querySelector('.plus_icon');
const minusIcon = document.querySelector('.add_icon_vertical');

toggleButton.addEventListener('click', function() {
  // 切换类名
  dropdownInfo.classList.toggle('active');
  toggleButton.classList.toggle('active');
  // plusIcon.style.display = toggleButton.classList.contains('active') ? 'none' : 'block';
  minusIcon.style.display = toggleButton.classList.contains('active') ? 'block' : 'none';
});


// -------------------------------------------------------
const largeImages = document.querySelectorAll('.carousel-image.large-screen');
const smallImages = document.querySelectorAll('.carousel-image.small-screen');
const buttons = document.querySelectorAll('.dot');

function updateCarousel(imageIndex) {
  largeImages.forEach((image, index) => {
    if (index === imageIndex) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });

  smallImages.forEach((image, index) => {
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
