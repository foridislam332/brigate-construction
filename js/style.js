$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

});
// Find the 'count this' class on the page and animate it
02
$('.count-this').each(function () {
    03

    04
    // Start the counting from a specified number - in this case, 0!
    05
    $(this).prop('Counter', 0).animate({
        06
        Counter: $(this).text()
        07
    }, {
        08
        // Speed of counter in ms, default animation style
        09
        duration: 3000,
        10
        // Easing function
        11
        easing: 'swing',
        12
        step: function (now) {
            13
            // Round up the number
            14
            $(this).text(Math.ceil(now));
            15
        }
        16
    });
    17
});