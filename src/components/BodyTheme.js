'use client';

import { useEffect } from 'react';

const createSelectionStyle = (highlightColor) => {
  const styleEl = document.createElement('style');
  styleEl.setAttribute('data-body-theme-selection', 'true');
  styleEl.textContent = `
    ::selection {
      background: ${highlightColor};
      color: inherit;
    }

    ::-moz-selection {
      background: ${highlightColor};
      color: inherit;
    }
  `;
  return styleEl;
};

export default function BodyTheme({ backgroundColor, highlightColor }) {
  useEffect(() => {
    const previousBackground = document.body.style.backgroundColor;
    let selectionStyleElement;

    if (backgroundColor) {
      document.body.style.backgroundColor = backgroundColor;
    }

    if (highlightColor) {
      selectionStyleElement = createSelectionStyle(highlightColor);
      document.head.appendChild(selectionStyleElement);
    }

    return () => {
      document.body.style.backgroundColor = previousBackground;
      if (selectionStyleElement) {
        selectionStyleElement.remove();
      }
    };
  }, [backgroundColor, highlightColor]);

  return null;
}

