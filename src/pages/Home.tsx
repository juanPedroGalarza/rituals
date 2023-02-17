import WriteText from "../components/WriteText";
import text from "../assets/text/home";
import { Link } from "react-router-dom";
import MainStyled from "../components/styled/MainStyled";
import { Typography, Box, Button } from "@mui/material";

export default function Home() {
  return (
    <MainStyled>
      <Typography variant="h3">{text.title}</Typography>
      <Box sx={{
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
        maxWidth: 600,
      }}>
        <WriteText interval={40}>{text.description}</WriteText>
      </Box>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/jugar"
        endIcon={<Typography
          sx={{ transform: "rotate(90deg)" }}>{":)"}</Typography>}
      >
        <Typography sx={{ marginRight: ".5rem" }}
        >JUGAR</Typography>
      </Button>
    </MainStyled>
  );
};