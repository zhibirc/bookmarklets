/**
 *
 */

// @ts-nocheck

(() : void => {
    const elements : HTMLAllCollection = document.all;

    let element : Element;
    let index : number;

    for ( index = 0; index < elements.length; index += 1 ) {
        element = elements[index];

        if ( element.style.visibility === 'hidden' ) {
            element.style.visibility = "visible !important"
        } else if ( element.style.display === 'none' ){
            element.style.display = 'block !important';
        } else if ( element.tagName === 'IMG' && (element.width < 2 || element.height < 2) ) {
            element.style.cssText = "outline: 5px solid #f00"
        }

        element.style.opacity = 1;
    }
})();
