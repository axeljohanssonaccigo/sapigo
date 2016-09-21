'use strict';
var mobileBreakPoint = 1024;
var screenWidth = jQuery(window).width();

var setWhyAnchor = function () {
    if (screenWidth <= mobileBreakPoint) {
        jQuery('#whysapigo').addClass('to-bottom');
        jQuery('#whysapigo').appendTo('#welcome-img');
    } else {
        jQuery('#whysapigo').removeClass('to-bottom');
        jQuery('#whysapigo').insertBefore('#why-sapigo-placeholder');
    }
};
document.addEventListener('DOMContentLoaded', function () {
    setWhyAnchor();
});
//On window resize
jQuery(window).resize(function () {
    screenWidth = jQuery(window).width();
    setWhyAnchor();
});