$(window).on('load', function() {
    $(window).scroll(function() {
        const windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function() {
            const objectBottom = $(this).offset().top + $(this).outerHeight();

            if(objectBottom < windowBottom) {
                if($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
            } else {
                if($(this).css("opacity")==1) {$(this).fadeTo(500, 0);}
            }
        });
    }).scroll();
});

// Landing Page Animation 
const logo = document.getElementById('logoImage');
const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const hero = document.querySelector('.hero-content');

const tl = new TimelineMax();

tl.fromTo(
    logo,
    1.3,
    { x: '1500%' },
    { x: '0%', ease: Power2.easeInOut }
)
    .fromTo(
        hamburger,
        1.3,
        { x: '-1500%' },
        { x: '0%', ease: Power2.easeInOut }
    )

    .fromTo(
        nav,
        1.3,
        { x: '-1500%' },
        { x: '0%', ease: Power2.easeInOut }
    )


    .fromTo( hero, 2, { y: '1500%' }, { y: '0%', ease: Power2. easeInOut}, '-=2')