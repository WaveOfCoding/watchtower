import { Block } from 'baseui/block';
import { Skeleton } from 'baseui/skeleton';

const RecommendationsSkeleton = () => {
  return (
    <Block display="flex" overflow="hidden" padding="24px 0">
      <Block margin="0 8px">
        <Skeleton width="200px" height="340px" animation />
      </Block>
      <Block margin="0 8px">
        <Skeleton width="200px" height="340px" animation />
      </Block>
      <Block margin="0 8px">
        <Skeleton width="200px" height="340px" animation />
      </Block>
      <Block margin="0 8px">
        <Skeleton width="200px" height="340px" animation />
      </Block>
      <Block margin="0 8px">
        <Skeleton width="200px" height="340px" animation />
      </Block>
      <Block margin="0 8px">
        <Skeleton width="200px" height="340px" animation />
      </Block>
      <Block margin="0 8px">
        <Skeleton width="200px" height="340px" animation />
      </Block>
      <Block margin="0 8px">
        <Skeleton width="200px" height="340px" animation />
      </Block>
    </Block>
  );
};

export default RecommendationsSkeleton;
