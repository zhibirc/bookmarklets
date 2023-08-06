/**
 * @author Yaroslav Surilov <zhibirc.echo@gmail.com>
 */


((link : string) : void => {
    location.href = link.replace(/youtube/i, 'hooktube');
})(location.href);
