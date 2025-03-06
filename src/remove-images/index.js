/**
 * Remove all images on a web page for reducing obtrusiveness.
 * @author Yaroslav Surilov <zhibirc.echo@gmail.com>
 */


(() => {
    [...document.all].forEach(element => {
        if ( element.tagName === 'IMG' ) {
            // @ts-ignore
            element.style.display = 'none !important';
        }

        if ( getComputedStyle(element).backgroundImage.indexOf('url') !== -1 ) {
            // @ts-ignore
            element.style.backgroundImage = 'none !important';
        }
    });
})();
