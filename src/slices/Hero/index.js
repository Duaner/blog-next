/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */

import { PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import styles from './hero.module.css'; // Replace 'YourComponentName' with the actual name of your component
import Moment from "moment";


const Hero = ({ slice, context }) => {
  const secondaryColor = context.secondary_color;
  const formattedDate = Moment(context.first_publication_date).format("LL");

  return (
    <section className={styles.container}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage  field={slice.primary.coverimage} style={{
           marginBottom: '20px', display:'block', height:'auto'
         }} />
      <PrismicRichText field={slice.primary.title} components={RTcomp} />

      <div id="date-and-intro" className={styles.dateIntro}>
        <p id="date" className={styles.date}style={{
            color: secondaryColor
        }}>
            {formattedDate}
        </p>
        <div className={styles.subtitle} style={{ color: secondaryColor }}><PrismicRichText field={slice.primary.subtitle} components={RTcomp} /></div>
      </div>
    </section>
  );
};

export default Hero;

const RTcomp = {
  heading1: ({ node, children }) => (
   <h1 className={styles.title}>{children}</h1>
  ),
  heading2: ({ node, children }) => (
    <h2 className={styles.h2subtitle}>{children}</h2>
  ),
}
