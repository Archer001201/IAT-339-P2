var header = document.getElementById('myHeader');
let timer;
let mouseOnHeader = false;


header.addEventListener('mouseover', function() {
  mouseOnHeader = true;
});

header.addEventListener('mouseout', function() {
  mouseOnHeader = false;
});

// 页面加载时立即检查header的位置
if (header.getBoundingClientRect().top !== 0) {
  header.classList.add('hide');
}

window.addEventListener('scroll', function() {
  // 如果header在页面顶部，则不隐藏
  if (header.getBoundingClientRect().top >= 0) {
    header.classList.remove('hide');
  } else {
    // clearTimeout(timer);  // 清除现有的计时器

    timer = setTimeout(function() {
      // 如果鼠标不在header上，隐藏header
      if (!mouseOnHeader) {
        header.classList.add('hide');
      }
    }, 2000);
  }
});

// window.addEventListener('scroll', function() {
//     var header = document.getElementById('myHeader');
    
//     // 当用户开始滚动时，显示header
//     header.classList.remove('hide');
  
//     // 设置一个2秒（2000毫秒）的定时器，当时间到了，隐藏header
//     setTimeout(function() {
//       header.classList.add('hide');
//     }, 2000);
//   });
  

  
