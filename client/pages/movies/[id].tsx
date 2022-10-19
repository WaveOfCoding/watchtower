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
} from '../../styles/styles';

const getDuration = (runtime: number) => {
  const minutes = runtime % 60;
  const hours = Math.floor(runtime / 60);

  return `${hours}h ${minutes}m`;
};

const Movie: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: movie = {} } = useOneMovie(Number(id));
  const { data = {}, isLoading, error } = useTMDBMovie(movie.tmdbId);
  const { data: credits = [] } = useTMDBMovieCredits(movie.tmdbId);
  const { data: videos } = useTMDBMovieVideos(movie.tmdbId);
  const { data: recommendations } = useTMDBMovieRecommendations(movie.tmdbId);

  console.log('recommendations', recommendations);

  return (
    <Fragment>
      <Head>
        <title>Movie Details</title>
        <meta name="description" content="Films watch list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Block marginTop="16px">
        <Backdrop
          $url={`${TMDB_IMAGES.backdrop.original}${data.backdrop_path}`}
        >
          <BackdropCover>
            <Poster
              src={`${TMDB_IMAGES.posters.w342}${data.poster_path}`}
              alt="poster"
            />
            <Block flex="1" marginLeft="18px">
              <Title>{data.title}</Title>
              <ShortInfo $hasSeparator={false}>{data.release_date}</ShortInfo>
              <ShortInfo>
                {data.genres &&
                  data.genres
                    .map((g: { id: number; name: string }) => g.name)
                    .join(', ')}
              </ShortInfo>
              <ShortInfo>{getDuration(data.runtime)}</ShortInfo>
              <Rating>
                Popularity:{' '}
                <Badge
                  color={COLOR.positive}
                  content={`${Math.floor(data.popularity)}%`}
                />
              </Rating>
              <Tagline>{data.tagline}</Tagline>
              <LabelLarge color="#fff">Overview</LabelLarge>
              <ParagraphSmall color="#fff">{data.overview}</ParagraphSmall>
            </Block>
          </BackdropCover>
        </Backdrop>
      </Block>
      <Block>
        <SectionTitle>Trailers</SectionTitle>
        <StyledDivider $size={DIVIDER_SIZE.cell} />
        <Block display="flex" overflow="auto">
          {(videos?.results || [])
            .filter((video: any) => video.site === 'YouTube')
            .map((video: any) => (
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
        <SectionTitle>Cast</SectionTitle>
        <StyledDivider $size={DIVIDER_SIZE.cell} />
        <Block
          display="flex"
          overflow="auto"
          paddingBottom="24px"
          marginTop="24px"
        >
          {credits.cast &&
            credits.cast
              .reverse()
              .splice(0, 8)
              .map(
                (
                  c: any // TODO: define cast type
                ) => (
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
                )
              )}
        </Block>
      </Block>
    </Fragment>
  );
};

export default Movie;
