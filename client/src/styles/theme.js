import { createMuiTheme } from '@material-ui/core/styles';
import UniSansThin from 'fonts/uni-sans.thin-caps.otf';
import UniSans from 'fonts/uni-sans.heavy-caps.otf';

const unisans = {
  fontFamily: 'UniSans',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('UniSans'),
    local('UniSans-Regular'),
    url(${UniSans}) format('otf')
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
      main: '#FF0E87'
    },
    secondary: {
      main: "#ED7A85"
    }
  },
  typography: {
    fontFamily: [
      'UniSans', 
      'UniSansThin'
    ].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [unisans, unisanst]
      }
    }
  }
});
