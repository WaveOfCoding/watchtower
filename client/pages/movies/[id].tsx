/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Block } from 'baseui/block';
import { ParagraphSmall, LabelLarge, LabelSmall } from 'baseui/typography';
import { Badge, COLOR } from 'baseui/badge';
import { StyledDivider, SIZE as DIVIDER_SIZE } from 'baseui/divider';
import { TMDB_IMAGES } from '../../constants';
import { useOneMovie } from '../../services/api/movies';
import {
  useTMDBMovie,
  useTMDBMovieCredits,
  useTMDBMovieVideos,
  useTMDBMovieRecommendations,
} from '../../services/api/tmdb';
import MovieInfoSkeleton from '../../components/MovieInfoSkeleton';
import RecommendationsSkeleton from '../../components/RecommendationsSkeleton';
import CastSkeleton from '../../components/CastSkeleton';
import {
  TMDBMovie,
  TMDBCredits,
  TMDBCast,
  TMDBRecommendedMovie,
  TMDBRecommendations,
  TMDBVideo,
} from '../../types';
import {
  Backdrop,
  BackdropCover,
  Poster,
  Tagline,
  Title,
  ShortInfo,
  Rating,
  CastCard,
  CastImage,
  CharacterName,
  SectionTitle,
  RecommendationCard,
  RecommendationTitle,
} from '../../styles/movie';

const getDuration = (runtime: number) => {
  const minutes = runtime % 60;
  const hours = Math.floor(runtime / 60);

  return `${hours}h ${minutes}m`;
};

const getCast = (credits: TMDBCredits) => {
  const { cast = [] } = credits || {};
  const sorted = cast.sort(
    (a: TMDBCast, b: TMDBCast) => (b.popularity || 0) - (a.popularity || 0)
  );

  return sorted.slice(0, 8);
};

const getRecommendations = (
  recommendations: TMDBRecommendations | undefined
) => {
  const { results = [] } = recommendations || {};
  const sorted = results.sort(
    (a: TMDBRecommendedMovie, b: TMDBRecommendedMovie) =>
      (b.popularity || 0) - (a.popularity || 0)
  );

  return sorted.slice(0, 8);
};

const Movie: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: movie } = useOneMovie(Number(id));
  const { data: tmdbMovie, isLoading: isMovieLoading } = useTMDBMovie(
    movie?.tmdbId
  );
  const { data: credits = {}, isLoading: isCreditsLoading } =
    useTMDBMovieCredits(movie?.tmdbId);
  const { data: videos } = useTMDBMovieVideos(movie?.tmdbId);
  const { data: recommendations, isLoading: isRecommendationsLoading } =
    useTMDBMovieRecommendations(movie?.tmdbId);

  const cast = getCast(credits);
  const recs = getRecommendations(recommendations);

  return (
    <Fragment>
      <Head>
        <title>Movie Details</title>
        <meta name="description" content="Films watch list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Block marginTop="16px">
        <Backdrop
          $url={`${TMDB_IMAGES.backdrop.original}${tmdbMovie?.backdrop_path}`}
        >
          <BackdropCover>
            {isMovieLoading && <MovieInfoSkeleton />}
            {!isMovieLoading && tmdbMovie && (
              <Fragment>
                <Poster
                  src={`${TMDB_IMAGES.posters.w342}${tmdbMovie.poster_path}`}
                  alt="poster"
                />
                <Block flex="1" marginLeft="18px">
                  <Title>{tmdbMovie.title}</Title>
                  <ShortInfo $hasSeparator={false}>
                    {tmdbMovie.release_date}
                  </ShortInfo>
                  <ShortInfo>
                    {tmdbMovie.genres &&
                      tmdbMovie.genres
                        .map((g: { id?: number; name?: string }) => g.name)
                        .join(', ')}
                  </ShortInfo>
                  <ShortInfo>{getDuration(tmdbMovie?.runtime || 0)}</ShortInfo>
                  <Rating>
                    Popularity:{' '}
                    <Badge
                      color={COLOR.positive}
                      content={`${Math.floor(tmdbMovie?.popularity || 0)}%`}
                    />
                  </Rating>
                  <Tagline>{tmdbMovie.tagline}</Tagline>
                  <LabelLarge color="#fff">Overview</LabelLarge>
                  <ParagraphSmall color="#fff">
                    {tmdbMovie.overview}
                  </ParagraphSmall>
                </Block>
              </Fragment>
            )}
          </BackdropCover>
        </Backdrop>
      </Block>
      <Block>
        <SectionTitle>Trailers</SectionTitle>
        <StyledDivider $size={DIVIDER_SIZE.cell} />
        <Block display="flex" overflow="auto">
          {videos?.results &&
            videos?.results
              .filter((video: TMDBVideo) => video.site === 'YouTube')
              .map((video: TMDBVideo) => (
                <iframe
                  style={{ flexShrink: 0 }}
                  key={video.id}
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${video.key}`}
                  title={video.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ))}
        </Block>
      </Block>
      <Block>
        <SectionTitle>Recommendations</SectionTitle>
        <StyledDivider $size={DIVIDER_SIZE.cell} />
        {isRecommendationsLoading && <RecommendationsSkeleton />}
        {!isRecommendationsLoading && recs.length > 0 && (
          <Block display="flex" overflow="auto" padding="24px 0">
            {recs.map((rec: TMDBRecommendedMovie) => (
              <Block key={rec.id} margin="0 8px">
                <RecommendationCard
                  src={`${TMDB_IMAGES.posters.w342}/${rec.poster_path}`}
                  alt="recommendation"
                />
                <RecommendationTitle>{rec.title}</RecommendationTitle>
              </Block>
            ))}
          </Block>
        )}
      </Block>
      <Block>
        <SectionTitle>Cast</SectionTitle>
        <StyledDivider $size={DIVIDER_SIZE.cell} />
        {isCreditsLoading && <CastSkeleton />}
        {!isCreditsLoading && cast.length > 0 && (
          <Block
            display="flex"
            overflow="auto"
            paddingBottom="24px"
            marginTop="24px"
          >
            {cast.map((c: TMDBCast) => (
              <CastCard key={c.id}>
                <CastImage
                  src={`${TMDB_IMAGES.profiles.w185}/${c.profile_path}`}
                  alt="profile"
                />
                <Block padding="8px">
                  <LabelSmall>{c.name}</LabelSmall>
                  <CharacterName>{c.character}</CharacterName>
                </Block>
              </CastCard>
            ))}
          </Block>
        )}
      </Block>
    </Fragment>
  );
};

export default Movie;
