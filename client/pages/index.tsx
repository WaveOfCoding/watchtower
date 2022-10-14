import type { NextPage } from 'next';
import { Fragment, useState } from 'react';
import Head from 'next/head';
import { Block } from 'baseui/block';
import { StarRating } from 'baseui/rating';
import { Button, SIZE, SHAPE } from 'baseui/button';
import { Checkbox } from 'baseui/checkbox';
import { StyledDivider, SIZE as DIVIDER_SIZE } from 'baseui/divider';
import { useStyletron } from 'baseui';
import FilmSelect from '../components/FilmSelect';
import ListItem from '../components/ListItem';

const Home: NextPage = () => {
  const [value, setValue] = useState(4);
  const [checked, setChecked] = useState(true);
  const [css] = useStyletron();

  return (
    <Fragment>
      <Head>
        <title>Watchtower homepage</title>
        <meta name="description" content="Films watch list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Block margin="24px 0">
        <FilmSelect />
        <Block
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          margin="18px 0"
        >
          <Block display="flex" alignItems="center">
            <Block marginRight="16px">
              <Checkbox checked={checked} onChange={() => setChecked(!checked)}>
                Add to Watchlist
              </Checkbox>
            </Block>
            <StarRating
              numItems={5}
              onChange={(data) => setValue(data.value)}
              size={25}
              value={value}
            />
          </Block>
          <Button size={SIZE.compact} shape={SHAPE.default}>
            Save
          </Button>
        </Block>
      </Block>
      <StyledDivider $size={DIVIDER_SIZE.cell} />
      <ul
        className={css({
          padding: 0,
          margin: '24px 0',
        })}
      >
        <ListItem />
        <ListItem />
      </ul>
    </Fragment>
  );
};

export default Home;
