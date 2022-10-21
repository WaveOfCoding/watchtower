/* eslint-disable @next/next/no-img-element */
import { SyntheticEvent } from 'react';
import { useSWRConfig } from 'swr';
import { useRouter } from 'next/router';
import { HeadingSmall, ParagraphMedium } from 'baseui/typography';
import { Block } from 'baseui/block';
import { Tag, KIND, VARIANT } from 'baseui/tag';
import { StarRating } from 'baseui/rating';
import { useSnackbar } from 'baseui/snackbar';
import { useStyletron } from 'baseui';
import { TMDB_IMAGES } from '../../constants';
import { moviesEndpoint, useUpdateMovie } from '../../services/api/movies';
import { Movie } from '../../types';
import { Poster, RemoveButton } from './styles';

interface MovieItemProps {
  movie: Movie;
  onRemove: (id: number) => void;
}

const MovieItem = ({ movie, onRemove }: MovieItemProps) => {
  const { trigger } = useUpdateMovie();
  const router = useRouter();
  const [css] = useStyletron();
  const { mutate } = useSWRConfig();
  const { enqueue, dequeue } = useSnackbar();

  const handleRemove = (event: SyntheticEvent) => {
    event.stopPropagation();

    if (movie.id) {
      onRemove(movie.id);
    }
  };

  const handleNavigateTo = () => {
    router.push(`/movies/${movie.id}`);
  };

  const handleChangeRating = async (data: { value: number }) => {
    if (movie.id) {
      enqueue({
        progress: true,
        message: 'Movie rating was updated successfully',
      });
      await trigger(movie.id, { ...movie, rating: data.value });
      dequeue();
      mutate(moviesEndpoint);
    }
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
              // Hack: baseweb doesn't provide event for `onChange` callback
              <div onClick={(event) => event.stopPropagation()}>
                <StarRating
                  numItems={5}
                  onChange={handleChangeRating}
                  size={18}
                  value={movie.rating}
                />
              </div>
            )}
          </Block>
        </Block>
      </Block>
    </a>
  );
};

export default MovieItem;
