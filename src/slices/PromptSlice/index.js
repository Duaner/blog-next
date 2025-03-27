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
  // Function to darken a color slightly
  const darkenColor = (color, amount = 0.1) => {
    if (!color || color === 'inherit' || !color.startsWith('#')) return '#f7f7f7';
    
    // Remove the # and convert to RGB
    const hex = color.slice(1);
    const rgb = parseInt(hex, 16);
    
    const r = Math.max(0, Math.floor(((rgb >> 16) & 0xff) * (1 - amount)));
    const g = Math.max(0, Math.floor(((rgb >> 8) & 0xff) * (1 - amount)));
    const b = Math.max(0, Math.floor((rgb & 0xff) * (1 - amount)));
    
    return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
  };

  // Darken the background color from context or use a default light gray
  const bgColor = context?.background_color 
    ? darkenColor(context.background_color, 0.05) 
    : '#f9f9f9';
    
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
