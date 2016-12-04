$(document).ready(function () {

    /* it is for sticky navigation */
    $('.js--how-we-code').waypoint(function(direction){
        if (direction === "down"){
            $('.top-nav').addClass('sticky');
        }
        else {
            $('.top-nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    })

    /* Typed JS */
    $(function(){
        $("#typing_text").typed({
            strings: ["Learning must be affordable...", "Team based learning...", "Think WeCode..."],
            typeSpeed: 25,
            backSpeed: 0,
            backDelay: 1000,
            startDelay: 50,
            loop: true,
            loopCount: 3
        });
    });


    $('.js--toggle').click(function () {
        $('.top-nav-links').slideToggle(50);
    })
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

});
