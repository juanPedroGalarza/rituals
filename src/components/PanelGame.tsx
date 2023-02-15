import WriteText from "./WriteText";
import { useSelector } from "react-redux";
import "../styles/Play.css";
import PanelOptions from "./PanelOptions";
import { useState, useEffect } from "react";
import { UserState } from "../features/game/gameSlice";
import { StoreInterface } from "../features/store";

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
    selected && setText(selected.text)
  }, [selected]);
  useEffect(() => {
    smileEnd && smily !== 0 && setText(t => t + feeling)
  }, [smileEnd]);
  
  return (
    <div className="panel-container">
      <div className="panel-text">
        {!isFinal ? text ?
          <WriteText interval={50} >{text}</WriteText>
          : null
          : <WriteText interval={50}>{finalText}</WriteText>}
      </div>
      <PanelOptions />
    </div>
  );
};