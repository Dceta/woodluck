$('.carousel').carousel({interval: false});

// $(document).ready( function() {
//     var clickEvent = false;
//
//     $('#myCarousel').on('click', '.nav a', function() {
//         clickEvent = true;
//         $('#myspace .nav li').removeClass('active');
//         $(this).parent().addClass('active');
//     }).on('slid.bs.carousel', function(e) {
//             if(!clickEvent) {
//                 var count = $('#myspace .nav').children().length-1;
//                 var current = $("#myspace .nav li.active");
//                 current.removeClass('active').next().addClass('active');
//                 var id = parseInt(current.data('slide-to'));
//                 console.log(count)
//                 if(count == id) {
//                     $('#myspace .nav li').first().addClass('active');
//                 }
//             }
//             clickEvent = false;
//         });
// });

$('.navbar-nav a').click(function() {
    $('.logo').collapse();
});
$('#myTab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
});

$(document).ready(function () {
    $('#send').click(function (e) {
        e.preventDefault();
        $('#send').addClass('btn-disabled');
        $('#send').prop('disabled', true);
        $('.loader').show();
        $('#send > span').html("");


        $.post("assets/send-order.php", $("#send-form").serialize(), function (response) {
            $('.loader').delay(2000).hide(function(){
                $('#send > span').html("Спасибо!");
                $('#success').html(response).fadeIn();
                $('#success').delay(2000).fadeOut();
            });

        }).delay(2000).done(function () {
                $('#send').removeClass('btn-disabled');
                $('#send').prop('disabled', false);
            });
    });
});



/* affix the navbar after scroll below header */
/*$('#nav').affix({
    offset: {
        top: $('header').height()+$('#nav').height()
    }
});*/

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#nav' });

/* smooth scrolling for scroll to top */
$('.scroll-top').click(function(){
    $('body,html').animate({scrollTop:0},1000);
});

/* smooth scrolling for nav sections */
$('#nav a, .cta-nav a').click(function(){
    var link = $(this).attr('href');
    var pos = $(link).offset().top;
    $('body,html').animate({scrollTop: pos},700);
});

$(document).ready(function(){
    // fade in and fade out
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#uparrow').fadeIn();
            } else {
                $('#uparrow').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#uparrow').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

});
