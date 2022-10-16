import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import useSWR from 'swr';
import { SERVICE_API_BASE_URL } from '../../constants';

const axiosInstance = axios.create({
  baseURL: SERVICE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
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

export interface MoviesResult {
  data: any; // TODO: define `tmdb` response type
  isLoading: boolean;
  error: any; // TODO: define `error` type
}

export const useMovies = (): MoviesResult => {
  const options = {
    url: '/movies',
    params: {},
  };
  const { data, error } = useSWR(options, fetcher);

  return {
    data,
    isLoading: !error && !data,
    error,
  };
};
