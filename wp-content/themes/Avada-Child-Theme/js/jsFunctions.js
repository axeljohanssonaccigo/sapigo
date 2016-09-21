'use strict';
var mobileBreakPoint = 1024;
var screenWidth = jQuery(window).width();


document.addEventListener('DOMContentLoaded', function () {
    jQuery('.fusion-header-wrapper').addClass('fusion-is-sticky');
    setWhyAnchor();
});

jQuery(window).resize(function () {
    screenWidth = jQuery(window).width();
    setWhyAnchor();
});
var setWhyAnchor = function () {
    if (screenWidth <= mobileBreakPoint) {
        jQuery('#whysapigo').addClass('to-bottom');
        jQuery('#whysapigo').appendTo('#welcome-img');
    } else {
        jQuery('#whysapigo').removeClass('to-bottom');
        jQuery('#whysapigo').insertBefore('#why-sapigo-placeholder');
    }
};