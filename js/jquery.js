$(document).ready(function () {

    /* Typed JS */
    $(function(){
        $("#typing_text").typed({
            strings: ["Learning must be affordable...", "Think Project based coding...", " Think Team based learning", "Think WeCode..."],
            typeSpeed: 25,
            backSpeed: 0,
            backDelay: 1000,
            startDelay: 50,
            loop: true,
            loopCount: 3
        });
    });

    /* Smooth Scrolling */

      $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
              return false;
            }
          }
        });
      });

    //   /* it is for sticky navigation */
    //   $('.js--how-we-code').waypoint(function(direction){
    //       if (direction === "down"){
    //           $('.top-nav').addClass('sticky');
    //       }
    //       else {
    //           $('.top-nav').removeClass('sticky');
    //       }
    //   }, {
    //     offset: '60px;'
    //   })


});
