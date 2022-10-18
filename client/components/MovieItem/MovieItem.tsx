/* eslint-disable @next/next/no-img-element */
import { SyntheticEvent } from 'react';
import { useRouter } from 'next/router';
import { HeadingSmall, ParagraphMedium } from 'baseui/typography';
import { Block } from 'baseui/block';
import { Tag, KIND, VARIANT } from 'baseui/tag';
import { Badge, COLOR, HIERARCHY } from 'baseui/badge';
import { useStyletron } from 'baseui';
import { TMDB_IMAGES } from '../../constants';
import { Movie } from '../../types';
import { Poster, RemoveButton } from './styles';

interface MovieItemProps {
  movie: Movie;
  onRemove: (id: number) => void;
}

const MovieItem = ({ movie, onRemove }: MovieItemProps) => {
  const router = useRouter();
  const [css] = useStyletron();

  const handleRemove = (event: SyntheticEvent) => {
    event.stopPropagation();

    if (movie.id) {
      onRemove(movie.id);
    }
  };

  const handleNavigateTo = (event: SyntheticEvent) => {
    router.push(`/movies/${movie.id}`);
  };

  return (
    <a
      className={css({ textDecoration: 'none', cursor: 'pointer' })}
      onClick={handleNavigateTo}
    >
      <Block display="flex" alignItems="flex-start" marginBottom="16px">
        <Block>
          <Poster
            src={`${TMDB_IMAGES.posters.w342}${movie.poster}`}
            alt="poster"
          />
        </Block>
        <Block flex="1" marginLeft="16px">
          <HeadingSmall $style={{ margin: '0 0 4px 0' }}>
            {movie.title}
            <RemoveButton onClick={handleRemove}>Remove from list</RemoveButton>
          </HeadingSmall>
          <ParagraphMedium $style={{ margin: 0 }}>
            {movie.description}
          </ParagraphMedium>
          <Block marginTop="8px">
            {movie.watchlist ? (
              <Tag
                kind={KIND.primary}
                variant={VARIANT.solid}
                closeable={false}
              >
                want to watch
              </Tag>
            ) : (
              <Badge
                color={COLOR.positive}
                hierarchy={HIERARCHY.primary}
                content={`Rating: ${movie.rating}`}
              />
            )}
          </Block>
        </Block>
      </Block>
    </a>
  );
};

export default MovieItem;
