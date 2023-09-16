import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

import Blogpost from '@/components/blogPost'

export default async function Page({ params }) {
  const client = createClient();
  const page = await client
    .getSingle("homepage")
    .catch(() => notFound());

  const allBlogs = await client.getAllByType("blog_post");
  console.log("All blogs", allBlogs);
  return (
    <main>
      <div>Hello</div>
      {allBlogs.map(function(blog){
        return(
          <div>
            <div>blogPost</div>
            <Blogpost page={blog}/>
          </div>
        )
      })}
    </main>
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