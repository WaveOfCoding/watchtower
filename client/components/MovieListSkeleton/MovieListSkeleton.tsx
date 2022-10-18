import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { Skeleton } from 'baseui/skeleton';

interface MovieListSkeletonProps {
  count?: number;
}

const MovieListSkeleton = ({ count = 4 }: MovieListSkeletonProps) => {
  const [css] = useStyletron();
  return (
    <Block margin="24px 0">
      {Array.from({ length: count }, (_, i) => (
        <Block key={i} display="flex" marginBottom="16px">
          <div
            className={css({
              width: '86px',
              borderRadius: '8px',
              overflow: 'hidden',
            })}
          >
            <Skeleton height="140px" animation />
          </div>
          <Block flex="1" marginLeft="16px">
            <div
              className={css({
                marginBottom: '8px',
                borderRadius: '8px',
                overflow: 'hidden',
              })}
            >
              <Skeleton height="32px" animation />
            </div>
            <div
              className={css({
                borderRadius: '8px',
                overflow: 'hidden',
              })}
            >
              <Skeleton height="100px" animation />
            </div>
          </Block>
        </Block>
      ))}
    </Block>
  );
};

export default MovieListSkeleton;
