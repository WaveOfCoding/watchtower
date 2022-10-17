import axios, { ParamsSerializerOptions } from 'axios';

export const tmdbAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TMDB_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`,
  },
});

export const tmdbFetcher = (url: string, params: any) =>
  tmdbAxios.get(url, { params }).then((response) => response.data);

export const serviceAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVICE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const serviceFetcher = (url: string, params: any) =>
  serviceAxios.get(url, { params }).then((response) => response.data);
