$(document).ready(function() {
    
   /*For the sticky nav*/
    $('.js--TventyFirstSt').waypoint(function(direction){
        if (direction == 'down'){
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
        
    }, {
        offset: '40px;'
        
    });
    
    /*
    var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
}) */
    
    /*Nav to scrool smooth*/
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
    
    
    
    /* Animations on scroll */
    /* header headings */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeInLeft');
    }, {
        offset: '100%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInRight');
    }, {
        offset: '100%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeInLeft');
    }, {
        offset: '100%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated fadeInRight');
    }, {
        offset: '100%'
    });
    
    /* today pictures */
    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated zoomInUp');
    }, {
        offset: '80%'
    });
    
    $('.js--wp-6').waypoint(function(direction) {
        $('.js--wp-6').addClass('animated zoomInLeft');
    }, {
        offset: '80%'
    });
    
    $('.js--wp-7').waypoint(function(direction) {
        $('.js--wp-7').addClass('animated zoomInRight');
    }, {
        offset: '80%'
    });
    
    /* history play-music */
    $('.js--wp-8').waypoint(function(direction) {
        $('.js--wp-8').addClass('animated bounceInLeft');
    }, {
        offset: '100%'
    });
    
    $('.js--wp-9').waypoint(function(direction) {
        $('.js--wp-9').addClass('animated bounceInRight');
    }, {
        offset: '100%'
    });
    
    $('.js--wp-10').waypoint(function(direction) {
        $('.js--wp-10').addClass('animated bounceInLeft');
    }, {
        offset: '100%'
    });
    
    /* contact-form paragraph */
    $('.js--wp-11').waypoint(function(direction) {
        $('.js--wp-11').addClass('animated bounceInLeft');
    }, {
        offset: '90%'
    });
    
    /* button send */
    $('.js--wp-13').waypoint(function(direction) {
        $('.js--wp-13').addClass('animated lightSpeedIn');
    }, {
        offset: '90%'
    });
    
    /* today paragraphs */
    $('.js--wp-14').waypoint(function(direction) {
        $('.js--wp-14').addClass('animated fadeIn');
    }, {
        offset: '65%'
    });
    
    $('.js--wp-15').waypoint(function(direction) {
        $('.js--wp-15').addClass('animated fadeIn');
    }, {
        offset: '65%'
    });
    
    $('.js--wp-16').waypoint(function(direction) {
        $('.js--wp-16').addClass('animated fadeIn');
    }, {
        offset: '65%'
    });
    
    $('.js--wp-17').waypoint(function(direction) {
        $('.js--wp-17').addClass('animated fadeIn');
    }, {
        offset: '65%'
    });
    
    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
    });
    
    
});