import WriteText from "../components/WriteText";
import text from "../assets/text/home";
import { Link } from "react-router-dom";
import MainStyled from "../components/styled/MainStyled";
import { Typography, Box, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { StoreInterface } from "../features/store";
import { UserState } from "../features/game/gameSlice";
import { red } from "@mui/material/colors";

export default function Home() {
  const { isRed } = useSelector<StoreInterface, UserState>(
    (state) => state.game
  );
  return (
    <MainStyled>
      <Typography variant="h3" color={isRed ? red[500] : "inherit"}>
        {text.title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          width: "100%",
          maxWidth: 600,
        }}>
        <WriteText interval={40}>{text.description}</WriteText>
      </Box>
      <Button
        variant="contained"
        color={isRed ? "secondary" : "primary"}
        component={Link}
        to="/jugar"
        endIcon={
          <Typography sx={{ transform: "rotate(90deg)" }}>
            {isRed ? ":(" : ":)"}
          </Typography>
        }>
        <Typography sx={{ marginRight: ".5rem" }}>JUGAR</Typography>
      </Button>
    </MainStyled>
  );
}
