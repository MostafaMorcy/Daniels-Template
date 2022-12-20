$('.blog .owl-carousel').owlCarousel({
    margin: 30,
    loop: true,
    smartSpeed: 500,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});
