import { useState } from 'react';
import useSWR from 'swr';
import { serviceAxios, serviceFetcher } from './config';
import { Movie } from '../../types';

export const moviesEndpoint = '/movies';
export const useMovies = () => {
  const { data, error } = useSWR(moviesEndpoint, serviceFetcher);

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

export const useAddMovie = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any | null>(null);

  const trigger = async (movie: Movie) => {
    setError(null);
    setLoading(true);

    try {
      await serviceAxios.post(moviesEndpoint, movie);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return { loading, error, trigger };
};

export const useRemoveMovie = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any | null>(null);

  const trigger = async (id: number) => {
    setError(null);
    setLoading(true);

    try {
      await serviceAxios.delete(`/movies/${id}`);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return { loading, error, trigger };
};

export const useUpdateMovie = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any | null>(null);

  const trigger = async (id: number, movie: any) => {
    setError(null);
    setLoading(true);

    try {
      await serviceAxios.put(`/movies/${id}`, movie);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return { loading, error, trigger };
};
