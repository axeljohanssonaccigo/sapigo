'use strict';
var mobileBreakPoint = 1024;
var screenWidth = jQuery(window).width();


document.addEventListener('DOMContentLoaded', function () {
    if (!jQuery('.fusion-header-wrapper').hasClass('fusion-is-sticky')) {
        jQuery('.fusion-header-wrapper').addClass('fusion-is-sticky');
    }
    setWhyAnchor();
});
//On window resize
jQuery(window).resize(function () {
    screenWidth = jQuery(window).width();
    setWhyAnchor();
});
//On scroll
jQuery(window).scroll(function () {
    if (!jQuery('.fusion-header-wrapper').hasClass('fusion-is-sticky')) {
        jQuery('.fusion-header-wrapper').addClass('fusion-is-sticky');
    }
});
//Sets the whysapigo anchor in right place depending on screnn width
var setWhyAnchor = function () {
    if (screenWidth <= mobileBreakPoint) {
        jQuery('#whysapigo').addClass('to-bottom');
        jQuery('#whysapigo').appendTo('#welcome-img');
    } else {
        jQuery('#whysapigo').removeClass('to-bottom');
        jQuery('#whysapigo').insertBefore('#why-sapigo-placeholder');
    }
};