'use client';

import React from 'react';
import { PrismicRichText } from '@prismicio/react';
import BookDisplay from '../../components/BookDisplay';
import styles from './books.module.css';

const Book = ({ slice }) => {
  // Mock data for testing with 10 books
  const mockBooks = [
    {
      id: 1,
      coverImage: { url: 'https://source.unsplash.com/400x600?book-cover-1' },
      title: 'The Art of Programming'
    },
    {
      id: 2,
      coverImage: { url: 'https://source.unsplash.com/400x600?book-cover-2' },
      title: 'Digital Design Patterns'
    },
    {
      id: 3,
      coverImage: { url: 'https://source.unsplash.com/400x600?book-cover-3' },
      title: 'The Future of AI'
    },
    {
      id: 4,
      coverImage: { url: 'https://source.unsplash.com/400x600?book-cover-4' },
      title: 'Web Development Mastery'
    },
    {
      id: 5,
      coverImage: { url: 'https://source.unsplash.com/400x600?book-cover-5' },
      title: 'Cloud Architecture'
    },
    {
      id: 6,
      coverImage: { url: 'https://source.unsplash.com/400x600?book-cover-6' },
      title: 'Mobile App Design'
    },
    {
      id: 7,
      coverImage: { url: 'https://source.unsplash.com/400x600?book-cover-7' },
      title: 'Data Science Fundamentals'
    },
    {
      id: 8,
      coverImage: { url: 'https://source.unsplash.com/400x600?book-cover-8' },
      title: 'UX Research Methods'
    },
    {
      id: 9,
      coverImage: { url: 'https://source.unsplash.com/400x600?book-cover-9' },
      title: 'DevOps Practices'
    },
    {
      id: 10,
      coverImage: { url: 'https://source.unsplash.com/400x600?book-cover-10' },
      title: 'Cybersecurity Essentials'
    }
  ];

  // Use mock data for testing, otherwise use slice data
  const books = slice?.items?.length > 0 
    ? slice.items.map((item, index) => ({
        id: index,
        coverImage: {
          url: item.bookCover.url
        },
        title: item.bookTitle
      }))
    : mockBooks;

  return (
    <section className={styles.section}>
      {slice?.primary?.title && (
        <div className={styles.header}>
          <PrismicRichText field={slice.primary.title} />
        </div>
      )}
      {slice?.primary?.description && (
        <div className={styles.description}>
          <PrismicRichText field={slice.primary.description} />
        </div>
      )}
      <BookDisplay books={books} />
    </section>
  );
};

export default Book; 