/**
 * Remove annoying and intrusive visual garbage around the video of interest on YouTube.
 */
'use strict';
(() => {
    let idealStructure = {
        "ytd-app": {
            "#content": {
                "#page-manager": {
                    "ytd-watch-flexy": {
                        "#columns": {
                            "#primary": {
                                "#primary-inner": {
                                    "#comments": null
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    (function walk() {
        let nodeId;
        for (nodeId in idealStructure) {
            // @ts-ignore
            if (idealStructure[nodeId] === null) {
                // @ts-ignore
                removeSiblings(nodeId, true);
                return;
            }
            // @ts-ignore
            removeSiblings(nodeId);
            // @ts-ignore
            idealStructure = idealStructure[nodeId];
            // @ts-ignore
            walk();
        }
    })();
    function removeSiblings(nodeId, invert = false) {
        // @ts-ignore
        const $parent = document.querySelector(nodeId).parentNode;
        // @ts-ignore
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
