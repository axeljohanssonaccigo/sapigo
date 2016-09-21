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
    //Set the margin on document ready to prevent ugly loading on mobile devices
    //    j    //    jQuery('#content').css('padding-top', '83px');
    //    if (!jQuery('.fusion-header-wrapper').hasClass('fusion-is-sticky')) {
    //        jQuery('.fusion-header-wrapper').addClass('fusion-is-sticky');
    //    }
    setWhyAnchor();
    //    setWelcomeImgPadding();
});
//On window resize
jQuery(window).resize(function () {
    screenWidth = jQuery(window).width();
    setWhyAnchor();
    //    setWelcomeImgPadding();

});
//On scroll
//jQuery(window).scroll(function () {
//    //    if (!jQuery('.fusion-header-wrapper').hasClass('fusion-is-sticky')) {
//    //    jQuery('.fusion-header-wrapper').addClass('fusion-is-sticky');
//    //    }
//});
//Sets the whysapigo anchor in right place depending on screnn width

//var setWelcomeImgPadding = function () {
//    if (screenWidth <= mobileBreakPoint) {
//        //        jQuery('#welcome-img h1').css('margin-top', '83px');
//        //        jQuery('#content').css('margin-top', '0');
//
//        //        jQuery('.post-content').css('margin-top', '83px');
//
//    } else {
//        //        jQuery('#content').css('margin-top', '83px');
//        //        jQuery('#welcome-img h1').css('margin-top', '0');
//
//        //        jQuery('.post-content').css('margin-top', '83px');
//
//    }
//}