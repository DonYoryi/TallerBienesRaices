import { createTheme, responsiveFontSizes } from "@mui/material";

declare module '@mui/system' {
  interface BreakpointOverrides {
    // Your custom breakpoints
    laptop: true;
    tablet: true;
    mobile: true;
    desktop: true;
    // Remove default breakpoints
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
  }
}
const globalTheme = responsiveFontSizes(createTheme(
  {
    palette: {
      primary: {
        light: '#135178',
        main: '#135178',
        dark: '#135178',
        contrastText: '#FFF',
      },
      secondary: {
        light: '#0fc4d4',
        main: '#0fc4d4',
        dark: '#0fc4d4',
        contrastText: '#0fc4d4',
      },
    },
    breakpoints: {
      values: {
        laptop: 1440,
        tablet: 839,
        mobile: 414,
        desktop: 1440,
      }
    },
    typography:{
      h2:{
        fontWeight:'bold'
      }
    }
  }),
  { 
    breakpoints: ['laptop', 'tablet', 'mobile', 'desktop'], 
    factor: 5,
  });
export default globalTheme;