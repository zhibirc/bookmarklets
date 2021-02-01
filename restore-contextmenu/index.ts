/**
 * Bypass restrictions on the display of the context menu with mouse right-click, Shift+F10, Context Menu key.
 *
 * Generally, it's a bad UX practice usually used to prohibit saving images, viewing resources, and some additional actions with the page.
 */


(() : void => {
    document.onmousedown = document.onmouseup = document.oncontextmenu = () : boolean => {
        return true;
    };

    window.addEventListener('contextmenu', (event : Event) : void => {
        event.stopPropagation();
    }, true);
})();
