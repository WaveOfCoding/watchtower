/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { HeadingSmall, ParagraphMedium } from 'baseui/typography';
import { Block } from 'baseui/block';
import { Tag, KIND, VARIANT } from 'baseui/tag';
import { Badge, COLOR, HIERARCHY } from 'baseui/badge';
import { useStyletron } from 'baseui';
import { TMDB_IMAGES } from '../../constants';
import { Movie } from '../../types';

interface MovieItemProps {
  movie: Movie;
}

const MovieItem = ({ movie }: MovieItemProps) => {
  const [css] = useStyletron();

  return (
    <Link href={`/movies/${movie.id}`}>
      <a className={css({ textDecoration: 'none' })}>
        <Block display="flex" alignItems="flex-start" marginBottom="16px">
          <Block>
            <img
              className={css({
                width: '86px',
                height: '100%',
                maxWidth: '100%',
                verticalAlign: 'middle',
              })}
              src={`${TMDB_IMAGES.posters.w342}${movie.poster}`}
              alt="poster"
            />
          </Block>
          <Block flex="1" marginLeft="16px">
            <HeadingSmall $style={{ margin: '0 0 4px 0' }}>
              {movie.title}
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
    </Link>
  );
};

export default MovieItem;
