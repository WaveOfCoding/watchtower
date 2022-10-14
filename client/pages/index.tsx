import type { NextPage } from 'next';
import { Fragment } from 'react';
import Head from 'next/head';
import { StyledDivider, SIZE as DIVIDER_SIZE } from 'baseui/divider';
import { useStyletron } from 'baseui';
import MovieForm from '../components/MovieForm';
import MovieItem from '../components/MovieItem';

const movie1 = {
  id: 1,
  title: 'Fullmetal Alchemist: The Final Alchemy (2022)',
  description:
    "The Elric brothers' long and winding journey comes to a close in this epic finale, where they must face off against an unworldly, nationwide threat.",
  rating: 3,
  tmdbId: 960704,
  poster: '/AeyiuQUUs78bPkz18FY3AzNFF8b.jpg',
  watchlist: true,
};

const movie2 = {
  id: 2,
  title: 'Fight Club',
  description:
    'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
  rating: 5,
  tmdbId: 550,
  poster: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
  watchlist: false,
};

const Home: NextPage = () => {
  const [css] = useStyletron();

  return (
    <Fragment>
      <Head>
        <title>Watchtower homepage</title>
        <meta name="description" content="Films watch list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MovieForm />
      <StyledDivider $size={DIVIDER_SIZE.cell} />
      <ul
        className={css({
          padding: 0,
          margin: '24px 0',
        })}
      >
        <MovieItem movie={movie1} />
        <MovieItem movie={movie2} />
      </ul>
    </Fragment>
  );
};

export default Home;
