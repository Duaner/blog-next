import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const Image = ({ slice }) => (
  <section>
    <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
  </section>
)

export default Image