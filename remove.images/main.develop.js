/**
 * Remove all images on a web page for reducing obtrusiveness.
 *
 * @author
 */
(function () {
    [...document.all].forEach(element => {
        if ( element.tagName === 'IMG' ) {
            element.style.display = 'none !important';
        }

        if ( getComputedStyle(element).backgroundImage.indexOf('url') !== -1 ) {
            element.style.backgroundImage = 'none !important';
        }
    });
})();