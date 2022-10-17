import useSWR from 'swr';
import { serviceAxios, serviceFetcher } from './config';
import { Movie } from '../../types';

export const useMovies = () => {
  const { data, error } = useSWR('/movies', serviceFetcher);

  return {
    data,
    isLoading: !error && !data,
    error,
  };
};

export const useOneMovie = (id?: number) => {
  const { data, error } = useSWR(id ? `/movies/${id}` : null, serviceFetcher);

  return {
    data,
    isLoading: !error && !data,
    error,
  };
};

export const addMovie = (movie: Movie) => {
  return serviceAxios.post(`/movies`, movie);
};
