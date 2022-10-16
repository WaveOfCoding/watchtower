import type { NextPage } from 'next';
import { Fragment } from 'react';
import Head from 'next/head';
import { HeadingMedium, ParagraphMedium } from 'baseui/typography';

const About: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>About</title>
        <meta name="description" content="Films watch list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeadingMedium>What is Watchtower</HeadingMedium>
      <ParagraphMedium>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </ParagraphMedium>
    </Fragment>
  );
};

export default About;
