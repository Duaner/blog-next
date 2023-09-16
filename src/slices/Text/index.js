import React from 'react'
import { PrismicRichText } from '@prismicio/react'

import styles from './TextBlock.module.css'; // Assuming you have a CSS module for this component

const TextBlock = ({ slice }) => {
  return (
    <div className={styles.container}>
      <PrismicRichText field={slice.primary.text} />
    </div>
  );
};

export default TextBlock;
