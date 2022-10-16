export const SERVICE_API_BASE_URL = '/api/v1';
export const TMDB_API_BASE_URL = 'https://api.themoviedb.org/3';
export const TMDB_IMAGES = {
  backdrop: {
    original: 'https://image.tmdb.org/t/p/original',
  },
  posters: {
    w92: 'https://image.tmdb.org/t/p/w92',
    w342: 'https://image.tmdb.org/t/p/w342',
  },
  profiles: {
    w45: 'https://image.tmdb.org/t/p/w45',
    w185: 'https://image.tmdb.org/t/p/w185',
  },
};

export enum THEMES {
  light = 'light-theme',
  dark = 'dark-theme',
}
