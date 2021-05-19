
$(".openmenu").click(function(e){
  $( ".mobileMenu" ).addClass( "active" );
  e.preventDefault();
});

$(".closemenu").click(function(a){
  $( ".mobileMenu" ).removeClass( "active" );
  a.preventDefault();
});

$(".arrowWork").click(function(){
  $('html, body').animate({
      scrollTop: $("#work").offset().top
   }, 800);
});

var myCarousel = document.querySelector('.carousel')
var carousel = new bootstrap.Carousel(myCarousel)
