import { lightBlue, grey, red } from "@mui/material/colors";
import { createTheme, Theme } from "@mui/material/styles";

const theme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: lightBlue[700],
      dark: "#015f92",
      light: "#349fda",
    },
    secondary: {
      main: red[700],
      dark: "#932020",
      light: "#db5858",
    },
    background: {
      paper: grey[900],
    },
  },
});
export default theme;
