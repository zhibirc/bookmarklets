document.addEventListener('mousemove', handle);

/**
 *
 * @param event
 * @returns
 */
function handle (event) {
    const element = document.elementFromPoint(event.clientX, event.clientY);
    const tooltip = setTooltip();

    if (element) {
      const anchor = findAnchorElement(element);

      if (anchor && anchor.href) {
        const {detected, details} = detectSuspiciousUrl(anchor.href);

        if (detected) {
            tooltip.textContent = details ?? '\u26A0 Suspicious URL detected!';
            tooltip.style.display = 'block';
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;

            return;
        }
      }
    }

    tooltip.style.display = 'none';
}

function setTooltip() {
    let tooltip = document.getElementById('url-tooltip');

    if (!tooltip) {
      tooltip = document.createElement('div');
      tooltip.id = 'url-tooltip';
      tooltip.style.position = 'absolute';
      tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      tooltip.style.color = '#fff';
      tooltip.style.padding = '5px';
      tooltip.style.borderRadius = '4px';
      tooltip.style.fontSize = '12px';
      tooltip.style.zIndex = '1000';
      tooltip.style.pointerEvents = 'none';
      tooltip.style.display = 'none';

      document.body.appendChild(tooltip);
    }

    return tooltip;
}

function findAnchorElement(element) {
    while (element) {
        if (element instanceof HTMLAnchorElement) {
            return element;
        }

        element = element.parentElement;
    }

    return null;
}

function detectSuspiciousUrl (url) {
    try {
        const { hostname, pathname } = new URL(url);

        if (hostname.includes('example.com')) {
          return `Special URL: ${pathname}`;
        }

        return `URL: ${hostname}`;
      } catch {
        return {detected: false};
      }
}

function getScript(char){
    try {
      const codePoint = char.codePointAt(0);

      if (!codePoint) return null;

      const scriptRanges = {
        LATIN: [[0x0041, 0x007A]], // Basic Latin (A-Z, a-z)
        CYRILLIC: [[0x0400, 0x04FF], [0x0500, 0x052F]], // Cyrillic
        // Add more scripts if needed
      };

      for (const [script, ranges] of Object.entries(scriptRanges)) {
        for (const [start, end] of ranges) {
          if (codePoint >= start && codePoint <= end) {
            return script;
          }
        }
      }

      return null; // Unknown script
    } catch {
      return null;
    }
  }
