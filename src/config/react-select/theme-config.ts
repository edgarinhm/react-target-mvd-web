import { ThemeConfig } from 'react-select';
import customStyles from 'assets/styles/_custom-variables.scss';
import themes from 'assets/themes/mvd/_variables.scss';
const getSelectTheme = (theme: any, styles?: any) => {
  return {
    primary: theme.primaryColor,
    primary25: styles.hoverDropdown,
  };
};

const themeConfig: ThemeConfig = theme => ({
  ...theme,
  borderRadius: 0,

  colors: {
    ...theme.colors,
    ...getSelectTheme(themes, customStyles),
  },
});

export default themeConfig;
