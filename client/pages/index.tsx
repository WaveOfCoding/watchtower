import type { NextPage } from 'next';
import { Fragment } from 'react';
import Head from 'next/head';
import { StyledDivider, SIZE as DIVIDER_SIZE } from 'baseui/divider';
import { useStyletron } from 'baseui';
import { Spinner } from 'baseui/spinner';
import MovieForm from '../components/MovieForm';
import MovieItem from '../components/MovieItem';
import EmptyState from '../components/EmptyState';
import { useMovies } from '../services/api/movies';
import { Movie } from '../types';

const Home: NextPage = () => {
  const { data = [], isLoading } = useMovies();
  const [css, theme] = useStyletron();

  return (
    <Fragment>
      <Head>
        <title>Watchtower homepage</title>
        <meta name="description" content="Films watch list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MovieForm />
      <StyledDivider $size={DIVIDER_SIZE.cell} />
      {data.length > 0 && (
        <ul
          className={css({
            padding: 0,
            margin: '24px 0',
          })}
        >
          {data.map((movie: Movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </ul>
      )}
      {data.length == 0 && <EmptyState />}
      {isLoading && (
        <Spinner
          $borderWidth={theme.sizing.scale100}
          $size={theme.sizing.scale1600}
        />
      )}
    </Fragment>
  );
};

export default Home;
