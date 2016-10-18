var $ = require('jQuery');

var mn = $(".main-nav");
var mns = "main-nav-scrolled";
var hdr = $('header').height();

$(window).scroll(function() {
    if ($(this).scrollTop() > hdr) {
        mn.addClass(mns);
    } else {
        mn.removeClass(mns);
    }
});