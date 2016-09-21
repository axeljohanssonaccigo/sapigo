'use strict';
var mobileBreakPoint = 1024;

document.addEventListener('DOMContentLoaded', function () {
    //    jQuery("#main").attr('style', 'background-attachment: fixed !important');
    //    document.getElementById('main').style.backgroundAttachment = 'fixed !important';
    //    console.log(document.getElementById('main').style.backgroundAttachment);
    jQuery('.fusion-header-wrapper').addClass('fusion-is-sticky');
    //If mobile view
//    jQuery("#whysapigo").addClass("to-bottom");
//    jQuery("#whysapigo").appendTo("#welcome-img");


});

jQuery(window).resize(function () {
    var screenWidth = jQuery(window).width();
    if (screenWidth <= mobileBreakPoint) {
        jQuery("#whysapigo").addClass("to-bottom");
        jQuery("#whysapigo").appendTo("#welcome-img");
    } else {

    }
    console.log();
    jQuery("#log").append("<div>Handler for .resize() called.</div>");
});