document.addEventListener('DOMContentLoaded', function() {
    var dropdownToggle = document.querySelector('.dropdown_toggle');
    var dropdownMenu = document.querySelector('.dropdown_infor');
  
    dropdownToggle.addEventListener('click', function() {
      dropdownMenu.classList.toggle('collapsed');
    });
  });