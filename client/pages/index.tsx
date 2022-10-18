import type { NextPage } from 'next';
import { Fragment } from 'react';
import { useSWRConfig } from 'swr';
import Head from 'next/head';
import { useStyletron } from 'baseui';
import { StyledDivider, SIZE as DIVIDER_SIZE } from 'baseui/divider';
import { useSnackbar } from 'baseui/snackbar';
import MovieForm from '../components/MovieForm';
import MovieItem from '../components/MovieItem';
import EmptyState from '../components/EmptyState';
import MovieListSkeleton from '../components/MovieListSkeleton';
import {
  moviesEndpoint,
  useMovies,
  useRemoveMovie,
} from '../services/api/movies';
import { Movie } from '../types';

const Home: NextPage = () => {
  const { data = [], isLoading } = useMovies();
  const { trigger } = useRemoveMovie();
  const { enqueue, dequeue } = useSnackbar();
  const { mutate } = useSWRConfig();
  const [css] = useStyletron();

  const handleRemoveMovie = async (id: number) => {
    enqueue({
      progress: true,
      message: 'Removing movie from watchlist',
    });
    await trigger(id);
    dequeue();
    mutate(moviesEndpoint);
  };

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
            <MovieItem
              key={movie.id}
              movie={movie}
              onRemove={handleRemoveMovie}
            />
          ))}
        </ul>
      )}
      {data.length === 0 && !isLoading && <EmptyState />}
      {isLoading && <MovieListSkeleton />}
    </Fragment>
  );
};

export default Home;
