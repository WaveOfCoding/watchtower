import { Block } from 'baseui/block';
import { Skeleton } from 'baseui/skeleton';

const MovieInfoSkeleton = () => {
  return (
    <Block display="flex" width="100%">
      <Block>
        <Skeleton width="200px" height="300px" animation />
      </Block>
      <Block flex="1" marginLeft="18px">
        <Block marginBottom="24px">
          <Skeleton width="100%" height="24px" animation />
        </Block>
        <Block marginBottom="16px">
          <Skeleton width="100%" height="16px" animation />
        </Block>
        <Block marginBottom="16px">
          <Skeleton width="100%" height="8px" animation />
        </Block>
        <Block marginBottom="16px">
          <Skeleton width="100%" height="90px" animation />
        </Block>
        <Skeleton width="100%" height="90px" animation />
      </Block>
    </Block>
  );
};

export default MovieInfoSkeleton;
