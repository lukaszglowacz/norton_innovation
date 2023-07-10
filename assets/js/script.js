// Start enter image animation, when website is fully loaded

window.addEventListener('load', function () {
    // After the page is fully loaded, make the body visible
    document.body.classList.add('visible');
});



// SliderJS configuration

let swiper;

function loadSwiper() {
    // if swiper is not undefined then we will destroy the old swiper
    if (swiper !== undefined) swiper.destroy(true, true);

    let direction;
    let pagination;
    let navigation;

    // If the viewport is 600px or less
    if (window.innerWidth <= 600) {
        direction = 'horizontal';
        pagination = false;
        navigation = false;
    } else {
        direction = 'horizontal';
        pagination = { el: '.swiper-pagination' };
        navigation = {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        };
    }

    swiper = new Swiper('.swiper', {
        direction: direction,
        loop: true,
        pagination: pagination,
        navigation: navigation,
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
}

// Call the function when the window loads or resizes
window.addEventListener('load', loadSwiper);
window.addEventListener('resize', loadSwiper);
