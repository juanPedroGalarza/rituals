import WriteText from "./WriteText";
import { useSelector } from "react-redux";
import "../styles/Play.css";
import PanelOptions from "./PanelOptions";
import { useState, useEffect } from "react";

export default function PanelGame() {
    const { selected, smily, isFinal, feeling, smileEnd } = useSelector(state => state.game);
    const finalText = "¿Quieres volver a jugar?";
    const [text, setText] = useState("");

    

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