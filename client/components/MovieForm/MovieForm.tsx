import { useState } from 'react';
import { useSWRConfig } from 'swr';
import { Block } from 'baseui/block';
import { Value } from 'baseui/select';
import { StarRating } from 'baseui/rating';
import { Button, SIZE, SHAPE } from 'baseui/button';
import { Checkbox } from 'baseui/checkbox';
import MovieSelect from '../MovieSelect';
import { addMovie } from '../../services/api/movies';

const MovieForm = () => {
  const [movie, setMovie] = useState<Value>([]);
  const [rating, setRating] = useState<number>(0);
  const [watchlist, setWatchist] = useState<boolean>(true);
  // const { mutate } = useSWRConfig();

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
    await addMovie({
      title: movie[0].title,
      description: movie[0].overview,
      rating,
      tmdbId: movie[0].id as number,
      poster: movie[0].poster_path,
      watchlist,
    });
    // mutate(MOVIES_ENDPOINT);
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
          onClick={saveMovie}
        >
          Save
        </Button>
      </Block>
    </Block>
  );
};

export default MovieForm;
