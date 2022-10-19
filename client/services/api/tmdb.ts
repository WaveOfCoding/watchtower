import useSWR from 'swr';
import { tmdbFetcher } from './config';

export const useTMDBSearch = (query: string) => {
  const { data, error } = useSWR(
    query ? ['/search/movie', { query }] : null,
    tmdbFetcher
  );

  return {
    data,
    isLoading: !error && !!query && !data,
    error,
  };
};

export const useTMDBMovie = (id?: number) => {
  const { data, error } = useSWR(id ? `/movie/${id}` : null, tmdbFetcher);

  return {
    data,
    isLoading: !error && !data,
    error,
  };
};

export const useTMDBMovieCredits = (movieId?: number) => {
  const { data, error } = useSWR(
    movieId ? `/movie/${movieId}/credits` : null,
    tmdbFetcher
  );

  return {
    data,
    isLoading: !error && !data,
    error,
  };
};

export const useTMDBMovieVideos = (movieId?: number) => {
  const { data, error } = useSWR(
    movieId ? `/movie/${movieId}/videos` : null,
    tmdbFetcher
  );

  return {
    data,
    isLoading: !error && !data,
    error,
  };
};

export const useTMDBMovieRecommendations = (movieId?: number) => {
  const { data, error } = useSWR(
    movieId ? `/movie/${movieId}/recommendations` : null,
    tmdbFetcher
  );

  return {
    data,
    isLoading: !error && !data,
    error,
  };
};
