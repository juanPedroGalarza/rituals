import WriteText from "../components/WriteText";
import MainStyled from "../components/styled/MainStyled";
import { useState } from "react";
import { Icon, IconButton, Box } from "@mui/material";

export default function Help(){
  const [open, setOpen] = useState<boolean>(false)
  const [srtartAnimation, setSrtartAnimation] = useState<boolean>(false)
  return (
    <MainStyled>
      {open ?
      <Box sx={{ width: "100%", maxWidth: 400 }}>
        <WriteText interval={30}>
          Cada vez que avances se te presentaran varias opciones
          La historia cambiara por cada eleccion que tomes.
          Asi que ten mucho cuidado con lo que eliges</WriteText>
      </Box>
        :
        <IconButton onClick={() => setSrtartAnimation(true)}
          sx={{
            fontSize:"4rem",
            transition: "all 2s ease-in",
            transform: srtartAnimation?"scale(5)":null,
            opacity: srtartAnimation ? "0%" : "100%"
          }}
          edge="start"
          onTransitionEndCapture={() => setOpen(true)}
          color="warning">
          <Icon fontSize="inherit">question_mark</Icon>
        </IconButton>}
    </MainStyled>
  );
};