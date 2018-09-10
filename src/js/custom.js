/*============================================

            smooth scrolling             
=============================================*/

$(function () {
    $("a.smooth-scroll").click(function (event) {
      event.preventDefault();
      //get return
      var section = $(this).attr("href");
  
      $("html, body").animate({
        if(section)
          {
            scrollTop: $(section).offset().top - 39
          }
        },
        3000,
        "easeInOutExpo"
      );
    });
  });




$(document).ready(function(){ 
  var file; var imagetype;

$("#picture").change(function(){
 file = thi.files[0];
 console.log(file);
 imagetype = file.type;
});
    

});