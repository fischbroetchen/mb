/*!
    * Start Bootstrap - Agency v6.0.3 (https://startbootstrap.com/theme/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    var buttonHide = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#up-button").removeClass("hide-button");
        } else {
            $("#up-button").addClass("hide-button");
        }
    };
    // Collapse now if page is not at top
    buttonHide();
    // Collapse the navbar when page is scrolled
    $(window).scroll(buttonHide);
   

    $(function () {

        $(document).on("click", function (e) {
            if (e.target.id != "slide1" && !$(e.target).closest("#slide1").length) {
                $("#slide1").removeClass("slider-toggle");
            }
            if (e.target.id != "slide2" && !$(e.target).closest("#slide2").length) {
                $("#slide2").removeClass("slider-toggle");
            }
        });
    });
   

})(jQuery); // End of use strict


   
   function sliderToggle1() {
            var element = document.getElementById("slide1");
            element.classList.toggle("slider-toggle");
            }
            function sliderToggle2() {
            var element = document.getElementById("slide2");
            element.classList.toggle("slider-toggle");
            }
            

jQuery(function($){
  $('.card-header').each(function(){
    let $card_header = $(this);
    let $collapse_element = $card_header.next();
    $collapse_element.on('show.bs.collapse', function () {
      let $card_header_top = $card_header.offset().top-100;
      let $visible_collapse = $('.collapse.show');
      if($visible_collapse.length){
        let $visible_collapse_top = $visible_collapse.offset().top+100;
        if($visible_collapse_top < $card_header_top){
          $card_header_top -= $visible_collapse.height();
        }
      }
      $([document.documentElement, document.body]).animate({
        scrollTop: $card_header_top
      });
    });
  });
});