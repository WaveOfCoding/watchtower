import axios from 'axios';

export const tmdbAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TMDB_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
  },
});

export const tmdbFetcher = <T = any>(url: string, params: any): Promise<T> => {
  return tmdbAxios.get(url, { params }).then((response) => response.data);
};

export const serviceAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVICE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const serviceFetcher = <T = any>(
  url: string,
  params: any
): Promise<T> => {
  return serviceAxios.get(url, { params }).then((response) => response.data);
};
