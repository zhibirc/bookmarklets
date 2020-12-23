/**
 * Remove annoying and intrusive visual garbage around the video of interest on YouTube.
 */
'use strict';
(function () {
    var $TARGET = document.getElementById('primary');

    document.querySelectorAll('body *').forEach(function ($element) {
        $element.style.display = 'none';
    });

    $TARGET.style.display = 'initial';

    while ( $TARGET.parentNode ) {
        $TARGET = $TARGET.parentNode;
        $TARGET.style.display = 'initial';
    }
})();

