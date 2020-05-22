import { createMuiTheme } from '@material-ui/core/styles';
import UniSansThin from 'fonts/uni-sans.thin-caps.otf';
import UniSansItalic from 'fonts/uni-sans.heavy-italic-caps.otf';
import UniSansItalicThin from 'fonts/uni-sans.thin-italic-caps.otf';
import UniSans from 'fonts/uni-sans.heavy-caps.otf';
import Helvetica from 'fonts/helvetica.ttf';
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

const unisansi = {
  fontFamily: 'UniSansItalic',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('UniSansItalic'),
    local('UniSansItalic-Regular'),
    url(${UniSansItalic}) format('opentype')
  `,
};

const unisansit = {
  fontFamily: 'UniSansItalicThin',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('UniSansItalicThin'),
    local('UniSansItalicThin-Regular'),
    url(${UniSansItalicThin}) format('opentype')
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

const helvetica = {
  fontFamily: 'Helvetica',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Helvetica'),
    local('Helvetica-Regular'),
    url(${Helvetica}) format('ttf')
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
    },
    blue: {
      main: constants.blue
    },
  },
  typography: {
    fontFamily: 'UniSans, UniSansThin, UniSansItalic, UniSansItalicThin, Helvetica',
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightMedium: 700,
    h1: {
      '@media (max-width: 75rem)': {
        fontSize: '4rem',
      },
    },
    h3: {
      fontFamily: 'UniSansThin'
    },
    h6: {
      fontFamily: 'UniSansThin',
      fontWeight: 300
    },
    subtitle1: {
      fontSize: '1.25rem',
    },
    subtitle2: {
      fontFamily: 'UniSansThin',
      fontSize: '1.25rem',
    },
    body1: {
      fontFamily: 'Helvetica',
      fontSize: '1.5rem',
      fontWeight: 600
    },
    body2: {
      fontFamily: 'Helvetica',
      fontSize: '1.25rem',
      fontWeight: 400
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [unisans, unisanst, unisansi, helvetica, unisansit],
        '@media (min-width:100rem)': {
          '.MuiContainer-maxWidthXl': {
            maxWidth: '100rem'
          },
        }
      }
    },
  }
});
