import * as React from 'react';
import {
  EmptyContainer,
  EmptyStateTitle,
  EmptyStateDescription,
} from './style';

const EmptyState = () => {
  return (
    <EmptyContainer>
      <EmptyStateTitle>No data here...</EmptyStateTitle>
      <EmptyStateDescription>
        There are no movies in watchlist
      </EmptyStateDescription>
    </EmptyContainer>
  );
};

export default EmptyState;
