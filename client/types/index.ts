export interface Movie {
  id?: number;
  title: string;
  description: string;
  rating?: number;
  tmdbId: number;
  poster: string;
  watchlist?: boolean;
}
