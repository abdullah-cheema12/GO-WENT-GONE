




// navigation bar
let bars = document.getElementById('togle');
// console.log(bars);
bars.addEventListener('click' , function(){
    let menuTogle = document.querySelector('.togle');
    let navigation = document.querySelector('.slider-page');

    menuTogle.classList.toggle('active'); 
    navigation.classList.toggle('active'); 
})






$(function () {
    $(".style-coll").slice(0, 3).show();
    $("body").on('click touchstart', '.style-btn-load', function (e) {
      e.preventDefault();
      $(".style-coll:hidden").slice(0, 3).slideDown();
      if ($(".style-coll:hidden").length == 0) {
        $(".style-btn-load").css('visibility', 'hidden');
      }
      $('html,body').animate({
        scrollTop: $(this).offset().top
      }, 1000);
    });
  });
  
  
  
  
  
  $('.counter').counterUp({
    delay: 10,
    time: 1500
});