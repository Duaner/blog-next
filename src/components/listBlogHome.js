'use client'
 
import styles from "../app/page.module.css";
import Blogpost from './blogPost';
import { useEffect, useRef, createRef, useMemo, useCallback } from 'react';
import Heading from "./Heading"; 
import BodyTheme from "./BodyTheme";

export default function ListBlogHome({ blogs = [], themeColor, highlightColor }) {

  const bgColorRef = useRef(null);
  const secondaryColorRef = useRef(null);

  const allBlogs = blogs;
  const blogRefs = useMemo(() => allBlogs.map(() => createRef()), [allBlogs]);

  const { backgroundFirstPost, secondaryFirstPost } = useMemo(() => {
    if (!allBlogs.length) {
      return {
        backgroundFirstPost: '#f9f9f9',
        secondaryFirstPost: '',
      };
    }

    return {
      backgroundFirstPost: allBlogs[0].data.background_color || '#f9f9f9',
      secondaryFirstPost: allBlogs[0].data.secondary_color || '',
    };
  }, [allBlogs]);

  const handleScroll = useCallback(() => {
    if (!bgColorRef.current || !secondaryColorRef.current) {
      return;
    }

    blogRefs.forEach((ref) => {
      if (ref.current && isInViewport(ref.current)) {
        bgColorRef.current.style.backgroundColor = ref.current.dataset.bg;
        secondaryColorRef.current.style.color = ref.current.dataset.secondary;
      }
    });
  }, [blogRefs]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  if (!allBlogs.length) {
    return null;
  }

  return(
    <main className={styles.LayoutContainer}>
      <BodyTheme
        backgroundColor={themeColor || backgroundFirstPost}
        highlightColor={highlightColor || secondaryFirstPost}
      />
      <div ref={secondaryColorRef} style={{color: secondaryFirstPost}}>
        <Heading></Heading>
      </div>

      <div id="bg-color" ref={bgColorRef} className={styles.bgColor} style={{background: backgroundFirstPost }}></div>
      {allBlogs.map(function(blog, index){
        console.log("blogData",blog)
        return(
          <div key={index} ref={blogRefs[index]} data-bg={blog.data.background_color} data-secondary={blog.data.secondary_color}>
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
