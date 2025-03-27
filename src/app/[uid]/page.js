import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import styles from '../page.module.css'
import Heading from "@/components/Heading";



export default async function Page({ params }) {
  const client = createClient();
  const page = await client
    .getByUID("blog_post", params.uid)
    .catch(() => notFound());
  const textColor = page.data.fontcolor ? page.data.fontcolor : ''
  return (
    <main className={styles.LayoutContainer} style={{color: textColor}}>
      <Heading></Heading>
      <div id="bg-color" className={styles.bgColor} style={{background : page.data.background_color}}></div>
      <div id="blog-main"  className={styles.blogmain}>
        <SliceZone 
          slices={page.data.body} 
          components={components} 
          context={{
            "date": page.first_publication_date, 
            "secondary_color": page.data.secondary_color,
            "background_color": page.data.background_color
          }} 
        />
      </div>
    </main>
  );
}


export async function generateMetadata({ params }) {
  const client = createClient();
  const page = await client
    .getByUID("blog_post", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      title: page.data.meta_title,
      description: page.data.meta_description,
      images: page.data.meta_image
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("blog_post");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
