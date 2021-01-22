/**
 * Short links for less typing, quick remember, pretty look and traffic economy.
 */

'use strict';

(() : void => {
    const zippers : {[index: string]: Function} = {
        tinyUrl: () : string => {
            return `https://tinyurl.com/create.php?url=${encodeURIComponent(location.href)}`;
        }
    };

    // TODO: temporal default, add ability to choose among other zippers (https://bitly.com/ and other)
    let zipper = 'tinyUrl';

    window.open(zippers[zipper]());
})();
