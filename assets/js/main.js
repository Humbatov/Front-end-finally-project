// $(document).ready(function() {
//
//     // $("#home").height($b);
//     $(window).resize(function() {
//         var $b = $(window).height();
//         var $a = $("#home").height();
//         if ($b > 326) {
//             $("#home").height($b);
//         } else {
//
//         }
//
//         console.log($b + " " + $a);
//     });
// });

// Navbar fixed script

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $("nav").addClass('navbar-fixed-top')
                .css('background-color', '#fff');

            $(".navbar-nav li a").css({
                color: "black"
            })

            $(".navbar-brand img").attr('src', 'assets/img/logo-inverted.png');


        } else {
            $("nav").removeClass('navbar-fixed-top')
                .removeAttr('style');
            $(".navbar-nav li a").removeAttr('style');
            $(".navbar-brand img").attr('src', 'assets/img/logo.png');
        }
    });
});
