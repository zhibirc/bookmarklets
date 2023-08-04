/**
 * Search selected text on a web page in Wikipedia.
 * @author Yaroslav Surilov <zhibirc.echo@gmail.com>
 */


(() : void => {
    const SEARCH_ENGINE : string = 'https://en.wikipedia.org/wiki/';

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
