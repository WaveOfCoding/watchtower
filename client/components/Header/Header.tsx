import { SyntheticEvent } from 'react';
import { useRouter } from 'next/router';
import { useStyletron } from 'baseui';
import { AppNavBar, NavItem } from 'baseui/app-nav-bar';
import { Filter } from 'baseui/icon';
import { Checkbox, STYLE_TYPE, LABEL_PLACEMENT } from 'baseui/checkbox';
import { THEMES } from '../../constants';

const mainItems = [
  { icon: undefined, label: 'Home', info: { link: '/' } },
  { icon: undefined, label: 'About', info: { link: '/about' } },
  { icon: undefined, label: 'Contact Us', info: { link: '/contacts' } },
  { icon: Filter, label: 'Theme Switcher', themeSwitcher: true },
];

const userItems = [
  { label: 'Action one', info: { color: 'green' } },
  { label: 'Action two', info: { color: 'yellow' } },
];

interface HeaderProps {
  onToggleTheme: (theme: THEMES) => void;
}

const Header = ({ onToggleTheme }: HeaderProps) => {
  const router = useRouter();
  const [, theme] = useStyletron();

  const handleMainItemSelect = (item: NavItem) => {
    console.log('on main item select', item);
    if (item.info?.link) {
      router.push(item.info.link);
    }
  };

  const handleSwitchTheme = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    onToggleTheme(target.checked ? THEMES.dark : THEMES.light);
  };

  const getItems = (item: any) => {
    if (item.themeSwitcher) {
      return (
        <Checkbox
          checked={theme.name === THEMES.dark}
          onChange={handleSwitchTheme}
          checkmarkType={STYLE_TYPE.toggle_round}
          labelPlacement={LABEL_PLACEMENT.right}
        >
          {theme.name === THEMES.light ? 'Light theme' : 'Dark theme'}
        </Checkbox>
      );
    }

    return <div>{item.label}</div>;
  };

  return (
    <AppNavBar
      title="Watchtower"
      mainItems={mainItems}
      userItems={userItems}
      username="Bob Mob"
      usernameSubtitle="WatchTower profile"
      userImgUrl=""
      mapItemToNode={getItems}
      onMainItemSelect={handleMainItemSelect}
    />
  );
};

export default Header;
