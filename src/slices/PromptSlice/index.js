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
  return (
    <section className={styles.promptContainer}>
      <div className={styles.promptText}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
