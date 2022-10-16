import { styled, Theme } from 'baseui';
import { colors } from 'baseui/tokens';
import { THEMES } from '../../constants';

export const Backdrop = styled<'div', { $url: string }>('div', (props) => {
  return {
    backgroundImage: `url(${props.$url})`,
    backgroundSize: 'cover',
    borderRadius: '18px',
    width: '100%',
  };
});

export const BackdropCover = styled('div', {
  background:
    'linear-gradient(to right, rgb(62 61 61) 150px, rgb(24 24 24 / 64%) 100%)',
  borderRadius: '18px',
  display: 'flex',
  alignItems: 'center',
  padding: '24px',
});

export const Poster = styled('img', {
  width: '200px',
});

export const Tagline = styled('p', ({ $theme }) => {
  return {
    ...$theme.typography.ParagraphSmall,
    fontStyle: 'italic',
    color: colors.gray300,
  };
});

export const Title = styled('h3', ({ $theme }) => {
  return {
    ...$theme.typography.HeadingLarge,
    color: colors.white,
    margin: 0,
  };
});

export const ShortInfo = styled<'span', { hasSeparator?: boolean }>(
  'span',
  ({ hasSeparator = true, $theme }) => {
    return {
      ...$theme.typography.ParagraphMedium,
      color: colors.white,
      margin: 0,

      ...(hasSeparator
        ? {
            ':before': {
              content: '"•"',
              padding: '0 4px',
            },
          }
        : {}),
    };
  }
);

export const Rating = styled('div', ({ $theme }) => ({
  ...$theme.typography.ParagraphMedium,
  color: colors.white,
  margin: '18px 0',
}));

export const CastCard = styled('div', ({ $theme }) => ({
  borderRadius: '3px',
  boxShadow: $theme.lighting.shadow500,
  margin: '0 8px',
}));

export const CastImage = styled('img', {
  borderRadius: '3px',
  width: '130px',
});

export const CharacterName = styled('p', ({ $theme }) => ({
  ...$theme.typography.ParagraphSmall,
  margin: 0,
}));

export const SectionTitle = styled('h4', ({ $theme }) => ({
  ...$theme.typography.HeadingMedium,
  color: $theme.name === THEMES.dark ? colors.white : colors.black,
  marginBottom: 0,
}));
