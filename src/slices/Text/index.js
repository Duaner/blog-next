import React from 'react'
import { PrismicRichText } from '@prismicio/react'

import styles from './TextBlock.module.css'; // Assuming you have a CSS module for this component

const TextBlock = ({ slice, context }) => {
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
      <PrismicRichText 
        field={slice.primary.text} 
        components={components}
      />
    </div>
  );
};

export default TextBlock;
