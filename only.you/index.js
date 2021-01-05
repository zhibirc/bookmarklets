/**
 * Remove annoying and intrusive visual garbage around the video of interest on YouTube.
 */
'use strict';
(function () {
    var TAG_WHITE_LIST = ['SCRIPT', 'STYLE', 'LINK'];
    var ID_WHITE_LIST = ['primary', 'primary-inner', 'player', 'info', 'meta'].map(document.getElementById.bind(document));
    // @ts-ignore
    document.querySelectorAll('body *').forEach(function ($element) {
        if (!TAG_WHITE_LIST.includes($element.tagName)) {
            $element.parentNode.removeChild($element);
        }
    });
    ID_WHITE_LIST.forEach(function ($element) {
        document.body.appendChild($element);
    });
})();
