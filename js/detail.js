
// detail dropdown

// 获取相关元素
const dropdownToggle = document.querySelector('.dropdown_toggle');
const dropdownInfor = document.querySelector('.dropdown_infor');

// 添加点击事件监听器
dropdownToggle.addEventListener('click', function() {
  // 切换详情部分的显示与隐藏
  dropdownInfor.classList.toggle('active');
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
