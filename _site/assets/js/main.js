jQuery(document).ready(function($) {

    $(window).on('load', function() {
      window.status = "ready";
    });

    $('.save-pdf').click(function() {
      getPDF();
    })
});
