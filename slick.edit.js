
  $(document).ready(function(){
    $('.slick').slick({
      autoplay: true,
      autoplaySpeed: 2500,
      dots: true,
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
    
    $('#menu-open').click(function(){
      $(this).removeClass('active');
      $('#menu-wrapper').fadeIn();
      $('.close').addClass('active');
    });
    $('#menu-close').click(function(){
      $('.close').removeClass('active');
      $('#menu-wrapper').fadeOut();
      $('#menu-open').addClass('active');
    });

    $('.menu-list li').click(function(){
     $('.close').removeClass('active');
     $('#menu-wrapper').fadeOut();
     $('#menu-open').addClass('active');
   });

    var topBtn = $('#menu-open');
   topBtn.hide();
   //スクロールが100に達したらボタン表示
   $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {
           topBtn.fadeIn();
       } else {
           topBtn.fadeOut();
       }
   });
    
  });
