/**
 * Bypass restrictions on the display of the context menu with mouse right-click, Shift+F10, ContextMenu key.
 * @description Generally, it's a bad UX practice usually used to prohibit saving images, viewing resources, and some additional actions with the page.
 * But Shift+ContextMenu works despite of disabling :).
 * @author Yaroslav Surilov <zhibirc.echo@gmail.com>
 */


(() => {
    document.onmousedown = document.onmouseup = document.oncontextmenu = () => {
        return true;
    };

    /*
    Code from the above may have no effect if page use "addEventListener" way. But because of listener is an anonymous function,
    "removeEventListener" has no chance. The approach below captures "contextmenu" event, prevents it from propagate, hence prevents its listener to fire.
    */
    window.addEventListener('contextmenu', (event) => {
        event.stopPropagation();
    }, true);
})();
