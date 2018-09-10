$(document).ready(function(){   
    
    
    /* navigation bar color change */
    var changeColor = function() {

        console.log('scroll')
            var scroll_start = 0;
            var startchange = $('#start');
            var offset = startchange.offset();
            if (startchange.length){
                $(document).scroll(function() { 
                    scroll_start = $(this).scrollTop();
                    if(scroll_start > offset.top) {
                        $(".navbar").addClass('bg-dark')
                    } else {
                        $(".navbar").removeClass('bg-light')
                        $(".navbar").removeClass('bg-dark')

                        console.log('portfolio out')
                    }
            });
        }
    }  

    /* page scroll on click */
    var scroll = function() {   
        $('.page-scroll a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });       
    }

var file; var imagetype;

$("#picture").change(function(){
 file = thi.files[0];
 console.log(file);
 imagetype = file.type;
});
    
    // Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
    interval: false
  });
  
  // for every slide in carousel, copy the next slide's item in the slide.
  // Do the same for the next, next item.
  $('.multi-item-carousel .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    if (next.next().length>0) {
      next.next().children(':first-child').clone().appendTo($(this));
    } else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
  });

    changeColor(); 
    scroll()
        
    });
