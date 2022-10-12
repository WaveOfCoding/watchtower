import { Fragment, ReactNode } from 'react';
import { Block } from 'baseui/block';
import Header from '../Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <Header onToggleTheme={() => {}} />
      <Block width={['100%', '480px', '540px', '960px']} margin="0 auto">
        {children}
      </Block>
    </Fragment>
  );
};

export default Layout;
