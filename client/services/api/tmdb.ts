import useSWR from 'swr';
import { tmdbFetcher } from './config';
import {
  TMDBMovie,
  TMDBMovies,
  TMDBCredits,
  TMDBVideos,
  TMDBRecommendations,
} from '../../types';

export const useTMDBSearch = (query: string) => {
  const { data, error } = useSWR<TMDBMovies>(
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
  const { data, error } = useSWR<TMDBMovie>(
    id ? `/movie/${id}` : null,
    tmdbFetcher
  );

  return {
    data,
    isLoading: !error && !data,
    error,
  };
};

export const useTMDBMovieCredits = (movieId?: number) => {
  const { data, error } = useSWR<TMDBCredits>(
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
  const { data, error } = useSWR<TMDBVideos>(
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
  const { data, error } = useSWR<TMDBRecommendations>(
    movieId ? `/movie/${movieId}/recommendations` : null,
    tmdbFetcher
  );

  return {
    data,
    isLoading: !error && !data,
    error,
  };
};
