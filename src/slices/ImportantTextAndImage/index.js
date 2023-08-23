
import React from "react";
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next'
import styles from './TextAndImage.module.css'; // Assuming you have a CSS module for this component

const TextAndImage = ({ slice }) => {
  return (
    <div id="featured_text" className={styles.container}>
      <strong className={styles.text}><PrismicRichText field={slice.primary.text_outlined} /></strong>
      <PrismicNextImage field={slice.primary.illustration} className={styles.image}/>
    </div>
  );
};

export default TextAndImage;