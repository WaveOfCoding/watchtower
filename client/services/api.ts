import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import useSWR from 'swr';
import { TMDB_API_BASE_URL } from '../constants';

const axiosInstance = axios.create({
  baseURL: TMDB_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
  },
});

const fetcher = async (options: AxiosRequestConfig): Promise<AxiosResponse> => {
  try {
    const response = await axiosInstance(options);
    return response.data;
  } catch (error: any) {
    return error?.response?.data;
  }
};

export interface TMDBSearchResult {
  data: any; // TODO: define `tmdb` response type
  isLoading: boolean;
  error: any; // TODO: define `error` type
}

export const useTMDBSearch = (query: string): TMDBSearchResult => {
  const options = {
    url: '/search/movie',
    params: {
      query,
    },
  };
  const { data, error } = useSWR(query ? options : null, fetcher);

  return {
    data,
    isLoading: !error && !!query && !data,
    error,
  };
};
