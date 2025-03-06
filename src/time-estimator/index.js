/**
 * Time estimation helper.
 * @author Yaroslav Surilov <zhibirc.echo@gmail.com>
 */


(() => {
    const $overlay = document.createElement('div');
    const $wrapper = document.createElement('div');
    const $closeIcon = document.createElement('b');

    const stylesOverlay = `position: fixed; width: 100%; height: 100%; top: 0; left: 0; background: rgba(0, 0, 0, .7); z-index: ${2 ** 31 - 1}; transition: .5s`;
    const stylesWrapper = 'width: 258px; height: 244px;';
    const stylesIframe = 'width: 100%; height: 100%; border: none; display: block; background: cyan;';
    const stylesCloseIcon = 'position: absolute; top: -22px; left: 236px; font-size: 40px; cursor: pointer;';

    $overlay.style.cssText = stylesOverlay;
    $wrapper.style.cssText = stylesWrapper;
    $closeIcon.style.cssText = stylesCloseIcon;

    $closeIcon.innerHTML = '&times;';
    $wrapper.innerHTML   = `<iframe src="https://zhibirc.github.io/estimator/" style="${stylesIframe}"><p>How about IFRAME?</p></iframe>`;

    $closeIcon.addEventListener('click', () => {
        document.body.removeChild($overlay);
        // TODO: cleanup?
    });

    $overlay.appendChild($closeIcon);
    $overlay.appendChild($wrapper);
    document.body.appendChild($overlay);
})();
