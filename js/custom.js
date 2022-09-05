$(function(){
  // visited-carousel
  $('.visited-carousel').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3

});
 // users-carousel
  $('.users-carousel').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    centerMode: true,

});
   // banner-carousel
  $('.banner-carousel').slick({
    dots: false,
    arrows: true,
    prevArrow:'<button type="button" class="slick-prev slick-arrow"><i class="fa fa-angle-left text-white"></i></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="fa fa-angle-right text-white"></i></button>',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
});
  // venobox
  $(document).ready(function(){
    $('.venobox').venobox(); 
});


});
