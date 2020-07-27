
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
    
    var hSize = $(window).height();
    $('header').height(hSize);

    $(window).resize(function(){
      var hSize = $(window).height();
      $('header').height(hSize);
    });
    
  });
