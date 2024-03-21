import PropTypes from 'prop-types';
import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

function goBack(isBlogPage) {
  if (isBlogPage) {
    return (
      <Link href="/">
        <a className={styles.goBackLink}>
          go back
        </a>
      </Link>
    );
  } else {
    return null;
  }
}

const Heading = ({ siteTitle, isBlogPage }) => (
  <header className="heading">
    <div className={styles.headerStyle}>
      <div className={styles.leftHeader}>
        <h1 className={styles.h1Style}>
          <Link className={styles.linkStyle} href="/">
              Renaud Bressand
          </Link>
          {goBack(isBlogPage)}
        </h1>
      </div>
      <div className={styles.rightHeader}>
        <p className={styles.productStyle}>
          PRODUCT @ PRISMIC
        </p>
        <p className={styles.twitterLinkedInStyle}>
          <a
            href="https://twitter.com/RenaudBressand"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.externalLink}
          >
            TWITTER
          </a>
          {" - "}
          <a
            href="https://www.linkedin.com/in/renaud-bressand-67003217?originalSubdomain=fr"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.externalLink}
          >
            LINKEDIN
          </a>
        </p>
      </div>
    </div>
  </header>
);

Heading.propTypes = {
  siteTitle: PropTypes.string,
  isBlogPage: PropTypes.bool,
};

Heading.defaultProps = {
  siteTitle: '',
  isBlogPage: false,
};

export default Heading;
