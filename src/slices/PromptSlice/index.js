'use client';

import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';
import styles from './styles.module.css';

/**
 * @typedef {import("@prismicio/client").Content.PromptSliceSlice} PromptSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<PromptSliceSlice>} PromptSliceProps
 * @param {PromptSliceProps}
 */
const PromptSlice = ({ slice, context }) => {
  const resolveBgColor = (color) => {
    if (!color || color === 'inherit') {
      return '#f9f9f9';
    }

    return color;
  };

  const bgColor = resolveBgColor(context?.background_color);
  const textColor = context?.secondary_color || '#666';

  return (
    <section 
      className={styles.promptContainer}
      style={{ 
        borderColor: textColor,
        backgroundColor: bgColor,
      }}
    >
      <div className={styles.promptText} style={{ color: textColor }}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <div className={styles.promptDescription}>
          <PrismicRichText field={slice.primary.intro_text} />
        </div>
      </div>
    </section>
  );
};

export default PromptSlice;
