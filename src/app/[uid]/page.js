import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import styles from '../page.module.css'
import Heading from "@/components/Heading";
import BodyTheme from "@/components/BodyTheme";



export default async function Page({ params }) {
  const client = createClient();
  const page = await client
    .getByUID("blog_post", params.uid)
    .catch(() => notFound());
  const textColor = page.data.fontcolor ? page.data.fontcolor : ''
  return (
    <>
      <BodyTheme
        backgroundColor={page.data.background_color}
        highlightColor={page.data.secondary_color}
      />
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
    </>
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
    themeColor: page.data.background_color || '#ffffff',
    icons: {
      icon: '/images/logo.png',
    },
    openGraph: {
      title: page.data.meta_title,
      logo: '/images/logo.png',
      description: page.data.meta_description,
      images: page.data.meta_image,
      url : `https://renaudbressand.com/${page.uid}`,
      type: 'article',
      publishedTime: page.first_publication_date,
      authors: ['Renaud Bressand'],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.data.meta_title,
      description: page.data.meta_description,
      images: page.data.meta_image,
      url : `https://renaudbressand.com/${page.uid}`,
      type: 'article',
      publishedTime: page.first_publication_date,
      authors: ['Renaud Bressand'],
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
