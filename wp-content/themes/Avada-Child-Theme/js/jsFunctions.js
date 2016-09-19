'use strict';
document.addEventListener('DOMContentLoaded', function () {
    jQuery("#main").attr('style', 'background-attachment: fixed !important');
    //    document.getElementById('main').style.backgroundAttachment = 'fixed !important';
    console.log(document.getElementById('main').style.backgroundAttachment);
});