/* eslint-disable @next/next/no-img-element */
import { useState, SyntheticEvent } from 'react';
import debounce from 'lodash.debounce';
import { Select, Value } from 'baseui/select';
import { Block } from 'baseui/block';
import { TMDB_IMAGES } from '../../constants';
import { useTMDBSearch } from '../../services/api/tmdb';
import { Poster, Title, VoteAverage, ReleaseDate } from './styles';

const getLabel = ({ option }: any) => {
  return (
    <Block display="flex" alignItems="center">
      <Block>
        <Poster
          src={`${TMDB_IMAGES.posters.w92}${option.poster_path}`}
          alt="poster"
        />
      </Block>
      <Block marginLeft="12px">
        <Title>{option.title}</Title>
        <Block display="flex">
          <VoteAverage>{option.vote_average}</VoteAverage>
          <ReleaseDate>{option.release_date}</ReleaseDate>
        </Block>
      </Block>
    </Block>
  );
};

interface MovieSelectProps {
  value: Value;
  onChange: (value: Value) => void;
}

const MovieSelect = ({ value, onChange }: MovieSelectProps) => {
  const [inputValue, setInputValue] = useState('');
  const { data, isLoading } = useTMDBSearch(inputValue);

  const handleChange = (data: { value: Value }) => {
    onChange(data.value);
  };

  const handleInputChange = debounce((event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    setInputValue(target.value);
  }, 400);

  return (
    <Select
      isLoading={isLoading}
      labelKey="title"
      valueKey="id"
      options={data?.results}
      value={value}
      placeholder="Select film"
      onChange={handleChange}
      onInputChange={handleInputChange}
      getOptionLabel={getLabel}
    />
  );
};

export default MovieSelect;
