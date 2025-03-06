/**
 * @fileoverview
 * Hide ALL modals on the current page.
 * This script detects and hides modals by high z-index, common modal patterns, and shadow DOM.
 *
 * For the inspiration and more details, see the following article:
 * @see https://samcurry.net/hacking-subaru
 *
 * @description
 * The core idea bases on the observation that modal windows/dialogs may sometimes used without
 * proper underlying security measures, being the last line of defense against malicious actors.
 * The script is intended for educational purposes only.
 */

(() => {
    const modals = [];

    // Detect high z-index elements.
    document.querySelectorAll('*').forEach(el => {
        const style = window.getComputedStyle(el);
        if (
            (style.position === 'fixed' || style.position === 'absolute') &&
            parseInt(style.zIndex, 10) > 100 &&
            style.display !== 'none' &&
            style.visibility !== 'hidden'
        ) {
            modals.push(el);
        }
    });

    // Detect elements matching common modal patterns
    const commonModalSelectors = [
        '[role="dialog"]', '[class*="modal"]', '[id*="modal"]',
        '[class*="popup"]', '[id*="popup"]', '[class*="overlay"]',
        '[id*="overlay"]', '.lightbox', '.fancybox', '.dialog', '.popup', '.overlay'
    ];

    commonModalSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            if (!modals.includes(el)) modals.push(el);
        });
    });

    // Detect shadow DOM modals
    document.querySelectorAll('*').forEach(el => {
        if (el.shadowRoot) {
            el.shadowRoot.querySelectorAll('*').forEach(shadowEl => {
                const shadowStyle = window.getComputedStyle(shadowEl);
                if (
                    (shadowStyle.position === 'fixed' || shadowStyle.position === 'absolute') &&
                    parseInt(shadowStyle.zIndex, 10) > 100
                ) {
                    modals.push(shadowEl);
                }
            });
        }
    });

    // Hide detected modals.
    modals.forEach(modal => {
        modal.style.display = 'none';
        console.log('Hidden modal:', modal);
    });

    alert(`Hidden ${modals.length} modal(s)!`);
})();
