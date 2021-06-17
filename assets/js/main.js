
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
        }, 800); 
    });
   }
}

function getPDF(){

  window.jsPDF = window.jspdf.jsPDF;

  var HTML_Width = $(".wrapper").width();
  var HTML_Height = $(".wrapper").height();
  var top_left_margin = 0;
  var PDF_Width = HTML_Width+(top_left_margin*2);
  var PDF_Height = (PDF_Width*1.5)+(top_left_margin*2);
  var canvas_image_width = HTML_Width;
  var canvas_image_height = HTML_Height;
  
  var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;
  

  html2canvas($(".wrapper")[0],{allowTaint:true}).then(function(canvas) {
    canvas.getContext('2d');
    
    console.log(canvas.height+"  "+canvas.width);
    
    
    var imgData = canvas.toDataURL("image/jpeg", 1.0);
    var pdf = new jsPDF('p', 'pt',  [PDF_Width, PDF_Height]);
      pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin,canvas_image_width,canvas_image_height);
    
    
    for (var i = 1; i <= totalPDFPages; i++) { 
      pdf.addPage(PDF_Width, PDF_Height);
      pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
    }
    
      pdf.save("HTML-Document.pdf");
  });
};

jQuery(document).ready(function($) {

    // $('.level-bar-inner').css('width', '0');
    
    // $(window).on('load', function() {

    //   animateBars();

    //   $(window).scroll(function() {
    //     animateBars();
    //   });
    // });

    // $('.save-pdf').click(function() {
    //   getPDF();
    // })

    $('.level-bar-inner').each(function() {
        var itemWidth = $(this).data('level');
        $(this).css('width', itemWidth);
      })
});