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
            strings: ["Change your life...", "Super affordable...", "Super Intensive..."],
            typeSpeed: 25,
            backSpeed: 0,
            backDelay: 1000,
            startDelay: 50,
            loop: true,
            loopCount: 3
        });
    });


    $('.js--nav-icon').click(function () {
        var nav = $('.js--top-nav-links');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);

        if(icon.hasClass('fa-th-list')){
            icon.addClass('ion-close')
            icon.removeClass('fa-th-list');
        }
        else {
            icon.addClass('fa-th-list');
            icon.removeClass('ion-close');
        }
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

});
