/**
 * How to talk like Yoda?
 *
 * Talking like Jedi Master Yoda is a fun and easy way to make a joke amongst your fellow Star Wars fans.
 * His unique style of reversing the words in a sentence are easily recognized by fans around the world.
 *
 * So, here are four easy steps:
 * 1. Take the first two or three words of a sentence, and just add them to the end. For example: 'You will find what you are looking for' turns into 'Find what you are looking for, you will.'
 * 2. Rearranging the negative in a sentences works very well. For example: 'I will not help you' turns into 'I will help you not.' Avoiding contractions will help in this -- 'I can't go there' turns into 'Go there, I can not.'
 * 3. Adding a 'hmmmm...' at the end of an altered question. For example, 'Do you know what I am talking about?' turns into 'Know what I am talking about, do you? Hmmm...?'
 * 4. Adding a 'yes' to an altered statement. For example: 'You are here for my help' turns into 'Here for my help, you are... yes...'
 *
 * Originally found at http://starwars.about.com/movies/starwars/
 *
 * @see https://en.wikipedia.org/wiki/Yoda
 * @author Yaroslav Surilov <zhibirc.echo@gmail.com>
 */


(() => {
    const stylesOverlay:string   = `position: fixed; width: 100%; height: 100%; top: 0; left: 0; background: rgba(0, 0, 0, .6); z-index: ${2 ** 31 - 1}; transition: .5s`;
    const stylesWrapper:string   = 'display: flex; width: 600px; height: 600px; border: none; margin: 100px auto; background: cyan; overflow: hidden;';
    const stylesLangColumns      = 'flex: 1; font-size: 40px; font-weight: bold; text-align: center; line-height: 600px; cursor: pointer;';
    const stylesIframe:string    = 'width: 100%; height: 100%; border: none; display: block; background: cyan; overflow: hidden;';
    const stylesCloseIcon:string = 'position: absolute; top: 20px; right: 45px; font-size: 60px; cursor: pointer;';

    const $overlay:HTMLDivElement    = document.createElement('div');
    const $wrapper:HTMLDivElement    = document.createElement('div');
    const $columnRuUk:HTMLDivElement = document.createElement('div');
    const $columnEn:HTMLDivElement   = document.createElement('div');
    const $closeIcon:HTMLElement     = document.createElement('b');

    $overlay.style.cssText    = stylesOverlay;
    $wrapper.style.cssText    = stylesWrapper;
    $columnRuUk.style.cssText = stylesLangColumns;
    $columnEn.style.cssText   = stylesLangColumns;
    $closeIcon.style.cssText  = stylesCloseIcon;

    $columnRuUk.textContent = 'RU/UK';
    $columnEn.textContent   = 'EN';

    $closeIcon.innerHTML = '&times;';

    $columnRuUk.addEventListener('click', () => {
        while ( $wrapper.firstChild ) $wrapper.removeChild($wrapper.firstChild);

        // TODO: add sandbox policies
        // really it's HTTP, hack to avoid "Blocked loading mixed active content"
        $wrapper.innerHTML = `<iframe src="https://vexer.ru/jokez/joda.php" style="${stylesIframe}" scrolling="no"><p>How about IFRAME?</p></iframe>`;
    });
    $columnEn.addEventListener('click', () => {
        // 'https://api.funtranslations.com/translate/yoda.json'
    });
    $closeIcon.addEventListener('click', () => {
        document.body.removeChild($overlay);
        // TODO: cleanup?
    });

    $wrapper.appendChild($columnRuUk);
    $wrapper.appendChild($columnEn);
    $overlay.appendChild($closeIcon);
    $overlay.appendChild($wrapper);
    document.body.appendChild($overlay);
})();
