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

  const allBlogs = await client.getAllByType("blog_post");
  return (
    <ListBlogHome blogs={allBlogs}></ListBlogHome>
  );
}

export async function generateMetadata({ params }) {
  const client = createClient();
  const page = await client
    .getSingle("homepage")
    .catch(() => notFound());

  console.log("Page", page);
  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
};