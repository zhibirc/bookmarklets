/**
 * Remove annoying and intrusive visual garbage around the video of interest on YouTube.
 * @author Yaroslav Surilov <zhibirc.echo@gmail.com>
 */


(() => {
    let idealStructure = {
        'ytd-app': {
            '#content': {
                '#page-manager': {
                    'ytd-watch-flexy': {
                        '#columns': {
                            '#primary': {
                                '#primary-inner': {
                                    '#comments': null
                                }
                            }
                        }
                    }
                }
            }
        }
    };

    (function walk () {
        let nodeId;

        for ( nodeId in idealStructure ) {
            if ( idealStructure[nodeId] === null ) {
                return removeSiblings(nodeId, true);
            }

            removeSiblings(nodeId);
            idealStructure = idealStructure[nodeId];
            walk();
        }
    })();


    function removeSiblings ( nodeId, invert = false ) {
        const $parent = document.querySelector(nodeId).parentNode;
        const collection = [...$parent.children].filter($element => {
            return (invert ? $element === document.querySelector(nodeId) : $element !== document.querySelector(nodeId))
                && $element.tagName !== 'SCRIPT'
                && $element.tagName !== 'LINK'
                && $element.tagName !== 'STYLE'
                && $element.tagName !== 'META';
        });
        collection.forEach($element => $parent.removeChild($element));
    }
})();
