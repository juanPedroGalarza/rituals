import WriteText from "../components/WriteText";
import MainStyled from "../components/styled/MainStyled";
import { useState } from "react";
import { Icon, IconButton, Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { StoreInterface } from "../features/store";
import { UserState } from "../features/game/gameSlice";

export default function Help() {
  const [open, setOpen] = useState<boolean>(false);
  const [srtartAnimation, setSrtartAnimation] = useState<boolean>(false);
  const [smileAnimation, setSmileAnimation] = useState<boolean>(false);
  const { isRed } = useSelector<StoreInterface, UserState>(
    (state) => state.game
  );
  return (
    <MainStyled>
      {open ? (
        <Box sx={{ width: "100%", maxWidth: 400 }}>
          {isRed ? (
            <Typography
              variant="h2"
              color={srtartAnimation? "inherit": "red"}
              sx={{
                transform: "rotate(90deg)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "25vw",
                transition: "all 5s ease-in"
              }}>
              <Typography variant="inherit">:</Typography>
              <Typography
                variant="inherit"
                sx={{
                  transition: srtartAnimation ? "all 0s" : "transform 4s ease, font-size 4s",
                  transform: srtartAnimation ? "none" : "rotateY(180deg)",
                  fontSize: !smileAnimation ? "inherit" : "30vw",
                }}
                onTransitionEndCapture={() => setSmileAnimation(true)}>
                {!srtartAnimation && !smileAnimation ? ")" : "("}
              </Typography>
            </Typography>
          ) : (
            <WriteText interval={30}>
              "Cada vez que avances se te presentaran varias opciones La
              historia cambiara por cada eleccion que tomes. Asi que ten mucho
              cuidado con lo que eliges"
            </WriteText>
          )}
        </Box>
      ) : (
        <IconButton
          onClick={() => setSrtartAnimation(true)}
          sx={{
            fontSize: "4rem",
            transition: "all 2s ease-in",
            transform: srtartAnimation ? "scale(5)" : null,
            opacity: srtartAnimation ? "0%" : "100%",
          }}
          edge="start"
          onTransitionEndCapture={() => {
            setOpen(true);
            setTimeout((): void => {
              setSrtartAnimation(false);
              setSmileAnimation(true);
            }, 400);
          }}
          color={isRed ? "secondary" : "warning"}>
          <Icon fontSize="inherit">question_mark</Icon>
        </IconButton>
      )}
    </MainStyled>
  );
}
