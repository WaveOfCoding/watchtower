import { styled } from 'baseui';
import { colors } from 'baseui/tokens';

export const Title = styled('p', ({ $theme }) => {
  return {
    ...$theme.typography.font250,
    margin: '0 0 4px 0',
  };
});

export const VoteAverage = styled('span', ({ $theme }) => {
  return {
    ...$theme.typography.font150,
    color: colors.green400,
  };
});

export const ReleaseDate = styled('span', ({ $theme }) => {
  return {
    ...$theme.typography.font150,
    fontWeight: 'normal',
    margin: '0 6px',
  };
});

export const Poster = styled('img', () => {
  return {
    width: '32px',
    maxWidth: '100%',
    verticalAlign: 'middle',
  };
});
