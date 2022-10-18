import { styled } from 'baseui';

export const Poster = styled('img', ({ $theme }) => ({
  width: '86px',
  height: '100%',
  maxWidth: '100%',
  verticalAlign: 'middle',
}));

export const RemoveButton = styled('span', ({ $theme }) => ({
  ...$theme.typography.ParagraphSmall,
  margin: '0 8px',

  ':hover': {
    textDecoration: 'underline',
  },
}));
