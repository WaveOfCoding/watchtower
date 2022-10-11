/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { HeadingSmall, ParagraphMedium } from 'baseui/typography';
import { Block } from 'baseui/block';
import { Tag, KIND, VARIANT } from 'baseui/tag';
import { useStyletron } from 'baseui';

const ListItem = () => {
  const [css] = useStyletron();

  return (
    <Link href="/about">
      <a className={css({ textDecoration: 'none' })}>
        <Block display="flex" alignItems="flex-start" marginBottom="16px">
          <Block>
            <img
              className={css({
                width: '86px',
                height: '100%',
                maxWidth: '100%',
                verticalAlign: 'middle',
              })}
              src="/fa.jpeg"
              alt="poster"
            />
          </Block>
          <Block flex="1" marginLeft="16px">
            <HeadingSmall $style={{ margin: '0 0 4px 0' }}>
              Fullmetal Alchemist: The Final Alchemy (2022)
            </HeadingSmall>
            <ParagraphMedium $style={{ margin: 0 }}>
              The Elric brothers’ long and winding journey comes to a close in
              this epic finale, where they must face off against an unworldly,
              nationwide threat.
            </ParagraphMedium>
            <Block>
              <Tag
                kind={KIND.primary}
                variant={VARIANT.solid}
                closeable={false}
              >
                want to watch
              </Tag>
            </Block>
          </Block>
        </Block>
      </a>
    </Link>
  );
};

export default ListItem;
