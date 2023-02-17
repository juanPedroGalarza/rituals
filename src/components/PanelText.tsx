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
    setText("");
    setTimeout(() => {
      setText(
        isFinal ?
          finalText
          : smileEnd && smily !== 0 ?
            selected.text + feeling
            : selected.text);
    }, 50);
  }, [selected.text, smileEnd, finalText, smily, feeling, isFinal]);
  
  return (
    <Paper className="panel-text" elevation={0}>
      <WriteText interval={25} forGame >{ text }</WriteText>
    </Paper>
  );
};