/*---------------------------------------------
Template name: RA Portfolio Themes
Version:        1.0

[Table of Content]

01: Preloader
05: client-logo-slider
06: Counter up
07: Back to Top
08: back to top button animate
----------------------------------------------*/

(function($) {
    "use strict";

    /* ======= Preloader ======= */


    $.fakeLoader({
        spinner: 'spinner1',
        bgColor: '#a58a25',
    });

    /* ======= ScrollUp ======== */

    $.scrollUp({
        animationSpeed: 300, // Animation speed (ms)
        scrollText: '', // Text for element, can contain HTML


    });

    /* ======= AOS init ======== */

    AOS.init();


})(jQuery);