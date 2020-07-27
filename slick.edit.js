
  $(document).ready(function(){
    $('.slick').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

    
    var hSize = $(window).height();
    $('header').height(hSize);

    $(window).resize(function(){
      var hSize = $(window).height();
      $('header').height(hSize);
    });
    
  });
