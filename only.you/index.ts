/**
 * Remove annoying and intrusive visual garbage around the video of interest on YouTube.
 */

'use strict';

(() => {
    const TAG_WHITE_LIST:Array<string> = ['SCRIPT', 'STYLE', 'LINK'];
    const ID_WHITE_LIST:Array<HTMLElement | null> = ['primary', 'primary-inner', 'player', 'info', 'meta'].map(document.getElementById.bind(document));

    // @ts-ignore
    document.querySelectorAll('body *').forEach($element => {
        if ( !TAG_WHITE_LIST.includes($element.tagName) ) {
            $element.parentNode.removeChild($element);
        }
    });

    ID_WHITE_LIST.forEach($element => {
        document.body.appendChild($element);
    });
})();
