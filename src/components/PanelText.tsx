import WriteText from "./WriteText";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { UserState } from "../features/game/gameSlice";
import { StoreInterface } from "../features/store";
import { Paper } from "@mui/material";

export default function PanelGame() {
  const {
    selected,
    smily,
    smileEnd,
    feeling,
    isFinal,
  } = useSelector<StoreInterface,UserState>(state => state.game);
  const finalText: string = "¿Quieres volver a jugar?";
  const [text, setText] = useState<string>("");


  useEffect(() => {
    selected ? setText(selected.text) : setText("");
  }, [selected]);
  useEffect(() => {
    smileEnd && smily !== 0 && setText(t => t + feeling)
  }, [smileEnd]);
  
  return (
    <Paper className="panel-text" elevation={0}>
      <WriteText interval={50} >{isFinal?finalText:text}</WriteText>
    </Paper>
  );
};