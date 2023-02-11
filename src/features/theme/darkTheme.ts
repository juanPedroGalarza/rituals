import { blue, grey } from '@mui/material/colors';
import { createTheme, Theme } from '@mui/material/styles';

const theme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: blue[500],
      dark: "#155fa0",
      light: "#4b9fea"
    },
    background: {
      paper: grey[900]
    }
  },
});
export default theme;