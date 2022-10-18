import { useState } from 'react';
import { useSWRConfig } from 'swr';
import { Block } from 'baseui/block';
import { Value } from 'baseui/select';
import { StarRating } from 'baseui/rating';
import { Button, SIZE, SHAPE } from 'baseui/button';
import { Checkbox } from 'baseui/checkbox';
import { useSnackbar } from 'baseui/snackbar';
import { Check } from 'baseui/icon';
import MovieSelect from '../MovieSelect';
import { moviesEndpoint, useAddMovie } from '../../services/api/movies';

const MovieForm = () => {
  const [movie, setMovie] = useState<Value>([]);
  const [rating, setRating] = useState<number>(0);
  const [watchlist, setWatchist] = useState<boolean>(true);
  const { loading: isAddingMovie, trigger } = useAddMovie();
  const { mutate } = useSWRConfig();
  const { enqueue, dequeue } = useSnackbar();

  const handleChangeWatchlist = () => {
    setWatchist(!watchlist);
  };

  const handleChangeRating = (data: { value: number }) => {
    setRating(data.value);
  };

  const handleMovieChange = (movie: Value) => {
    setMovie(movie);
  };

  const saveMovie = async () => {
    await trigger({
      title: movie[0].title,
      description: movie[0].overview,
      rating,
      tmdbId: movie[0].id as number,
      poster: movie[0].poster_path || '',
      watchlist,
    });
    enqueue({
      message: 'Successfully added a new movie',
      startEnhancer: ({ size }) => <Check size={size} />,
      actionMessage: 'Cancel',
      actionOnClick: () => {
        dequeue();
      },
    });
    mutate(moviesEndpoint);
  };

  return (
    <Block margin="24px 0">
      <MovieSelect value={movie} onChange={handleMovieChange} />
      <Block
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        margin="18px 0"
      >
        <Block display="flex" alignItems="center">
          <Block marginRight="16px">
            <Checkbox
              checked={watchlist}
              onChange={handleChangeWatchlist}
              disabled={!movie.length}
            >
              Add to Watchlist
            </Checkbox>
          </Block>
          {!watchlist && (
            <StarRating
              numItems={5}
              onChange={handleChangeRating}
              size={25}
              value={rating}
            />
          )}
        </Block>
        <Button
          size={SIZE.compact}
          shape={SHAPE.default}
          disabled={!movie.length}
          isLoading={isAddingMovie}
          onClick={saveMovie}
        >
          Save
        </Button>
      </Block>
    </Block>
  );
};

export default MovieForm;
