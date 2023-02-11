import { blue, blueGrey } from '@mui/material/colors';
import { createTheme, Theme } from '@mui/material/styles';

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
      dark: "#0e4686",
      light: "#4383cc"
    },
    background: {
      paper: blueGrey[100]
    }
  },
});
export default theme;