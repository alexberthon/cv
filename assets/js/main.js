function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    //var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

    	$(window).scroll(function() {
		   var hT = $('.level-bar').first().offset().top,
		       hH = $('.level-bar').first().outerHeight(),
		       wH = $(window).height(),
		       wS = $(this).scrollTop();
		    console.log((hT-wH) , wS);
		   if (wS > (hT-wH)){
		     $('.level-bar-inner').each(function() {
	            var itemWidth = $(this).data('level');
	            $(this).animate({
	                width: itemWidth
	            }, 800); 
	        });
		   }
		});

        

    });
   
    

});