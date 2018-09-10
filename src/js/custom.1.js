/*============================================

            smooth scrolling             
=============================================*/

$(function () {
    $("a.smooth-scroll").click(function (event) {
      event.preventDefault();
      //get return
      var section = $(this).attr("href");
  
      $("html, body").animate({
          scrollTop: $(section).offset().top - 39
        },
        3000,
        "easeInOutExpo"
      );
    });
  });