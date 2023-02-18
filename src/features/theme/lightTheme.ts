import { lightBlue, blueGrey, red } from "@mui/material/colors";
import { createTheme, Theme } from "@mui/material/styles";

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[900],
      dark: "#003c6c",
      light: "#3378af",
    },
    secondary: {
      main: red[900],
      dark: "#801313",
      light: "#c54949",
    },
    background: {
      paper: blueGrey[100],
    },
  },
});
export default theme;
