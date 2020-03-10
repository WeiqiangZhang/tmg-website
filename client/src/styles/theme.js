import { createMuiTheme } from '@material-ui/core/styles';
import UniSansThin from 'fonts/uni-sans.thin-caps.otf';
import UniSans from 'fonts/uni-sans.heavy-caps.otf';
import { constants } from './constants';

const unisans = {
  fontFamily: 'UniSans',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('UniSans'),
    local('UniSans-Regular'),
    url(${UniSans}) format('opentype')
  `,
};

const unisanst = {
  fontFamily: 'UniSansThin',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('UniSansThin'),
    local('UniSansThin-Regular'),
    url(${UniSansThin}) format('opentype')
  `
};

export default createMuiTheme({
  palette: {
    primary: {
      main: constants.primary
    },
    secondary: {
      main: constants.secondary
    },
    grey1: {
      main: constants.grey1
    },
    grey2: {
      main: constants.grey2
    },
    grey3: {
      main: constants.grey3
    },
    blueGrey: {
      main: constants.blueGrey
    }
  },
  typography: {
    fontFamily: [
      'UniSans',
      'UniSansThin'
    ].join(','),
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightMedium: 700,
    h3: {
      fontFamily: 'UniSansThin'
    },
    h6: {
      fontFamily: 'UniSansThin'
    },
    body1: {
      fontFamily: 'UniSans',
      fontWeight: 300
    },
    body2: {
      fontFamily: 'UniSansThin'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [unisans, unisanst]
      }
    }
  }
});
