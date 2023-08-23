/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */

import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import styles from './hero.module.css'; // Replace 'YourComponentName' with the actual name of your component


const Hero = ({ slice }) => {
  return (
    <section className={styles.container}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage  field={slice.primary.coverimage} style={{
           marginBottom: '20px'
         }} />
      <PrismicRichText field={slice.primary.title} components={RTcomp} />
      <PrismicRichText field={slice.primary.subtitle} components={RTcomp} />
      Placeholder component for hero (variation: {slice.variation}) Slices
    </section>
  );
};

export default Hero;

const RTcomp = {
  heading1: ({ node, children }) => (
   <h1 className={styles.title}>{children}</h1>
  ),
  heading2: ({ node, children }) => (
    <h2 className={styles.subtitle}>{children}</h2>
  ),
}
