import React from "react";
import { PrismicRichText } from '@prismicio/react';
import styles from './TitleAndText.module.css'; // Assuming you have a CSS module for this component

const TitleAndText = ({ slice, context }) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleLeft}>
        <h2 className={styles.title} style={{color : context.secondary_color}}><PrismicRichText field={slice.primary.titleLeft} /></h2>
      </div>
      <div className={styles.textRight}>
        <PrismicRichText field={slice.primary.paragraph} />
      </div>
    </div>
  );
};

export default TitleAndText;
