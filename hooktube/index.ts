/**
 *
 */


((link : string) : void => {
    location.href = link.replace(/youtube/i, 'hooktube');
})(location.href);
