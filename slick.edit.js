
  $(document).ready(function(){
    $('.slick').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      cssEase: 'case-in-out',
      infinite: true,
      swipe: true,
      fade: true,
      arrows: false,
    });
    
    var h = $(window).height();
    var mv = $("header").innerHeight();
    if (h>mv) {
      $('header').css('height', h);    
    }
    
  });
