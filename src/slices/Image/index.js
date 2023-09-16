import React from 'react'
import styles from './Image.module.css'; // Assuming you have a CSS module for this component


const Image = ({ slice }) => (
  <section className={styles.image}>
    <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
  </section>
)

export default Image