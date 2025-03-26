import React from "react";
import { PrismicRichText } from '@prismicio/react';
import styles from './TitleAndText.module.css'; // Assuming you have a CSS module for this component

const TitleAndText = ({ slice, context }) => {
  // Custom components for rich text with styled links
  const components = {
    hyperlink: ({ children, node }) => (
      <a 
        href={node.data.url} 
        target={node.data.target} 
        rel={node.data.target === '_blank' ? 'noopener noreferrer' : undefined}
        style={{ color: context?.secondary_color || 'inherit', textDecoration: 'underline' }}
      >
        {children}
      </a>
    ),
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleLeft}>
        <h2 className={styles.title} style={{color : context.secondary_color}}><PrismicRichText field={slice.primary.titleLeft} /></h2>
      </div>
      <div className={styles.textRight}>
        <PrismicRichText 
          field={slice.primary.paragraph} 
          components={components}
        />
      </div>
    </div>
  );
};

export default TitleAndText;
