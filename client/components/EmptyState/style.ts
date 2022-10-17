import { styled } from 'baseui';
import { colors } from 'baseui/tokens';
import { THEMES } from '../../constants';

export const EmptyContainer = styled('div', {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  margin: '24px 0',
});

export const EmptyStateTitle = styled('h3', ({ $theme }) => ({
  ...$theme.typography.HeadingXSmall,
  color: $theme.name === THEMES.dark ? colors.white : colors.black,
  paddingBlockStart: $theme.sizing.scale650,
  paddingBlockEnd: $theme.sizing.scale500,
  margin: 0,
}));

export const EmptyStateDescription = styled('p', ({ $theme }) => ({
  ...$theme.typography.ParagraphMedium,
  color: $theme.name === THEMES.dark ? colors.white : colors.black,
  paddingBlockEnd: $theme.sizing.scale650,
  margin: 0,
  padding: 0,
}));
