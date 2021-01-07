/* JQuery Sticky Navigation*/

$(document).ready(function() {

    $('.js--section-features').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').removeClass('nav-container')
            $('nav').addClass('sticky-nav');
        }

        else {
            $('nav').addClass('nav-container');
            $('nav').removeClass('sticky-nav');
        }
    }, {
        offset: '15%'
    });

});

function menuFunction() {
    document.getElementById('nav-links-container').classList.toggle('js--nav-links-container-show');
    document.getElementById('js--menu-icon').classList.toggle('js--icon-display-none');
    document.getElementById('js--menu-icon-close').classList.toggle('js--icon-display-block');
}