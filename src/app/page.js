import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";


import styles from '@/app/page.module.css'

import ListBlogHome from "@/components/listBlogHome";

export default async function Page({ params }) {

  const client = createClient();
  const page = await client
    .getSingle("homepage")
    .catch(() => notFound());

  const allBlogs = (await client.getAllByType("blog_post", {
    orderings: [
      { field: "document.first_publication_date", direction: "desc" },
    ],
  })).sort(
    (a, b) =>
      new Date(b.first_publication_date) - new Date(a.first_publication_date),
  );
  const firstBlog = allBlogs[0];
  const themeColor = firstBlog?.data.background_color || '#ffffff';
  const highlightColor = firstBlog?.data.secondary_color || '';
  return (
    <ListBlogHome
      blogs={allBlogs}
      themeColor={themeColor}
      highlightColor={highlightColor}
    ></ListBlogHome>
  );
}

export async function generateMetadata({ params }) {
  const client = createClient();
  const page = await client
    .getSingle("homepage")
    .catch(() => notFound());
  const blogs = await client.getAllByType("blog_post", {
    orderings: [
      { field: "document.first_publication_date", direction: "desc" },
    ],
    pageSize: 1,
  });
  const firstBlog = blogs[0];

  console.log("Page", page);
  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    themeColor: firstBlog?.data.background_color || '#ffffff',
  };
};