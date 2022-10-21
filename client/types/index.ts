export interface Movie {
  id?: number;
  title: string;
  description: string;
  rating?: number;
  tmdbId: number;
  poster: string;
  watchlist?: boolean;
}

export interface TMDBMovie {
  adult?: boolean;
  backdrop_path?: string | null;
  belongs_to_collection?: null | object;
  budget?: number;
  genres?: Array<{ id?: number; name?: string }>;
  homepage?: string | null;
  id?: number;
  imdb_id?: string | null;
  original_language?: string;
  original_title?: string;
  overview?: string | null;
  popularity?: number;
  poster_path?: string | null;
  production_companies?: Array<{
    name?: string;
    id?: number;
    logo_path?: string | null;
    origin_country?: string;
  }>;
  production_countries?: Array<{ iso_3166_1?: string; name?: string }>;
  release_date?: string;
  revenue?: number;
  runtime?: number | null;
  spoken_languages?: Array<{ iso_639_1?: string; name?: string }>;
  status?: string;
  tagline?: string | null;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export interface TMDBMovies {
  page?: number;
  total_results?: number;
  total_pages?: number;
  results?: Array<TMDBMovie>;
}

export interface TMDBCast {
  adult?: boolean;
  gender?: number | null;
  id?: number;
  known_for_department?: string;
  name?: string;
  original_name?: string;
  popularity?: number;
  profile_path?: string | null;
  cast_id?: number;
  character?: string;
  credit_id?: string;
  order?: number;
}

export interface TMDBCredits {
  id?: number;
  cast?: Array<TMDBCast>;
  crew?: Array<{}>;
}

export interface TMDBVideo {
  iso_639_1?: string;
  iso_3166_1?: string;
  name?: string;
  key?: string;
  site?: string;
  size?: number;
  type?: string;
  official?: boolean;
  published_at?: string;
  id?: string;
}

export interface TMDBVideos {
  id?: number;
  results?: Array<TMDBVideo>;
}

export interface TMDBRecommendedMovie {
  poster_path?: string | null;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: Array<number>;
  id?: number;
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: string | null;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
}

export interface TMDBRecommendations {
  page?: number;
  total_pages?: number;
  total_results?: number;
  results?: Array<TMDBRecommendedMovie>;
}
