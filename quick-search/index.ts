/**
 * Search selected text on a web page with provided search engine.
 */

'use strict';

(() : void => {
    const SEARCH_ENGINE : string = 'https://www.google.com/search?q=';

    let selected : Selection | null;
    let query : string;

    if ( window.getSelection ) {
        selected = window.getSelection();
    } else if ( document.getSelection ) {
        selected = document.getSelection();
    } else {
        // @ts-ignore
        selected = document.selection.createRange().text;
    }

    query = String(selected).trim();

    if ( query )  {
        window.open(`${SEARCH_ENGINE}${encodeURIComponent(query)}`);
    }
})();
