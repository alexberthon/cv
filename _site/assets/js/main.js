function animateBars() {
   var hT = $('.level-bar').first().offset().top,
       hH = $('.level-bar').first().outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
   if (wS > (hT-wH)){
     $('.level-bar-inner').each(function() {
        var itemWidth = $(this).data('level');
        $(this).animate({
            width: itemWidth
          },
          800,
          function() { window.status = "ready" }
        ); 
    });
   }
}

jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

      animateBars();

      $(window).scroll(function() {
        animateBars();
      });
    });

    $('.save-pdf').click(function() {
      getPDF();
    })
});