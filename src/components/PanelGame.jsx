import WriteText from "./WriteText"
import {useDispatch, useSelector} from "react-redux"
import "../styles/Play.css"
import OptionCap from "./OptionCap"
import { nextCap, emptyText, setFinal, reset, setMuted, setSmily } from "../features/game/gameSlice"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

export default function PanelGame() {
    const { selected, isWrited, optSelected, isFinal, feeling } = useSelector(state => state.game)
    const dispatch = useDispatch()
    const finalText = "¿Quieres volver a jugar?"
    const navigate = useNavigate()
    const [smile,setSmile] = useState(false)
    const [text, setText] = useState("")

    const toDoSelected = (action) => {
        switch (action) {
            case "IS_MUTED":
                dispatch(setMuted("YES"))
                break;
            case "NO_MUTED":
                dispatch(setMuted("NO"))
                break;
            case "HAPPY":
                dispatch(setSmily(1))
                break;
            case "SAD":
                dispatch(setSmily(-1))
                break;
            case "HAPPY_END":
                dispatch(setSmily(1))
                setSmile(true)
                break;
            case "SAD_END":
                dispatch(setSmily(-1))
                setSmile(true)
                break;
            default:
                break;
        }
    }

    const next = () => {
        dispatch(emptyText())
        setText("")
        setTimeout(() => {
            if (optSelected.cap > 0) {
                optSelected.action && toDoSelected(optSelected.action)
                dispatch(nextCap(optSelected))
            } else {
                dispatch(setFinal())
                setSmile(false)
            }
        },500)
    }
    const playAgain = () => {
        dispatch(emptyText())
        setText("")
        setTimeout(() => {
            dispatch(reset())
        },500)
    }

    useEffect(() => {
        selected&&setText(selected.text)
    },[selected])
    useEffect(() => {
        smile && setText(t=>t+feeling)
    }, [smile, feeling])
    
    return (
        <div className="panel-container">
            <div className="panel-text">
                {!isFinal ? text ?
                    <WriteText interval={50} >{text}</WriteText>
                    : null
                    : <WriteText interval={50}>{finalText}</WriteText>}
            </div>
            {isWrited?  isFinal ?
                <>
                    <button
                        type="button"
                        className="panel-submit"
                        onClick={playAgain}
                    >SI</button>
                    <button
                        type="button"
                        className="panel-submit"
                        onClick={()=>navigate("/")}
                    >NO</button>
                </>
                : <form className="panel-form">
                <div className="panel-options">
                    {selected.options?.map((o, i) => <OptionCap key={i} option={o} />)}
                </div>
                <button
                    type="button"
                    className={`panel-submit ${optSelected ? "" : "chose"}`}
                    onClick={optSelected ? next : null}>
                    {optSelected ? "Continuar" : "Elige"}</button>
                </form>
                : null
            }
        </div>
    )
};