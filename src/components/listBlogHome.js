'use client'
 
import styles from "../app/page.module.css";
import Blogpost from './blogPost';
import { useEffect, useRef, createRef } from 'react';

 
export default function ListBlogHome(blogs) {

  const bgColorRef = useRef(null);

  const allBlogs = blogs.blogs;
  const blogRefs = useRef(allBlogs.map(() => createRef()));


  const backgroundFirstPost = allBlogs[0].data.background_color;

  const handleScroll = () => {
    blogRefs.current.forEach((ref, index) => {
      if (ref.current && isInViewport(ref.current)) {
        console.log("C'est dans l'écran", ref.current.dataset.bg);
        bgColorRef.current.style.backgroundColor = ref.current.dataset.bg;
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <main className={styles.LayoutContainer}>
      <div id="bg-color" ref={bgColorRef} className={styles.bgColor} style={{background: backgroundFirstPost }}></div>
      <div>Hello</div>
      {allBlogs.map(function(blog, index){
        console.log("blogData",blog)
        return(
          <div key={index} ref={blogRefs.current[index]} data-bg={blog.data.background_color}>
            <Blogpost  page={blog}/>
          </div>
        )
      })} 
    </main>
  );
    
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}
