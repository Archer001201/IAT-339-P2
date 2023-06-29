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



  

  
