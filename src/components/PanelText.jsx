import WriteText from "./WriteText"
import {useSelector} from "react-redux"
import "../styles/Play.css"
import OptionCap from "./OptionCap"

export default function PanelText() {
    const { selected, isWrited, optSelected } = useSelector(state => state.game)
    const nextCap = () => {
        console.log(optSelected)
    }
    return (
        <div className="panel-container">
            <div className="panel-text">
                <WriteText interval={50}>{selected.text}</WriteText>
            </div>
            {isWrited ?
                <form className="panel-form">
                    <div className="panel-options">
                        {selected.options?.map((o) => <OptionCap key={o.selection} option={o} />)}
                    </div>
                    <button
                        type="button"
                        className={`panel-submit ${optSelected ? "" : "chose"}`}
                        onClick={optSelected ? nextCap : null}>
                        {optSelected ? "Continuar" : "Elige"}</button>
                </form>
                : null}
        </div>
    )
}