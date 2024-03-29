$('.carousel').carousel({interval: false});

$('.navbar-nav a').click(function () {
    $('.logo').collapse();
});
$('#myTab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
});

const handleSubmit = (e) => {
    e.preventDefault();
    $('#send').addClass('btn-disabled');
    $('#send').prop('disabled', true);
    $('#send > .loader').show();
    $('#send > span').html("");
    let myForm = document.getElementById('send-form');
    let formData = new FormData(myForm);
    fetch('/', {
        method: 'POST',
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: new URLSearchParams(formData).toString()
    }).then(() => {
        $('#send > .loader')
            .delay(2000)
            .hide(function () {
                $('#send > span').html("Спасибо!");
                $('#success').html("Мы вам скоро перезвоним.").fadeIn();
                $('#success').delay(2000).fadeOut();
            });
    });
}

const handleSubmitContact = (e) => {
    e.preventDefault();
    $('#btnContactUs').addClass('btn-disabled');
    $('#btnContactUs').prop('disabled', true);
    $('#btnContactUs > .loader').show();
    let myForm = document.getElementById('main-form');
    let formData = new FormData(myForm);
    fetch('/', {
        method: 'POST',
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: new URLSearchParams(formData).toString()
    }).then(() => {
        $('#btnContactUs > .loader')
            .delay(2000)
            .hide(function () {
                $('#btnContactUs > span').html("Спасибо!");
            });

    });
}

$(document).ready(function () {
    document.getElementById("send-form").addEventListener("submit", handleSubmit);
    document.getElementById("main-form").addEventListener("submit", handleSubmitContact);
});

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({target: '#nav'});

/* smooth scrolling for scroll to top */
$('.scroll-top').click(function () {
    $('body,html').animate({scrollTop: 0}, 1000);
});

/* smooth scrolling for nav sections */
$('#nav a, .cta-nav a').click(function () {
    var link = $(this).attr('href');
    var pos = $(link).offset().top;
    $('body,html').animate({scrollTop: pos}, 700);
});

$(document).ready(function () {
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
