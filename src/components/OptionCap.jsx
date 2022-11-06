import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectOpt } from "../features/game/gameSlice"

export default function OptionCap({option}) {
    const dispatch = useDispatch()
    const inputEl = useRef(null)
    const {isMuted} = useSelector(state=>state.game)

    if (option.condition) {
        switch (option.condition) {
            case "MUTED":
                if(isMuted==="NO") return null
                break;
            case "NO_MUTED":
                if(isMuted==="YES") return null
                break;
            case "EXCLUSIVE_MUTED":
                if(isMuted!=="YES") return null
                break;
            case "EXCLUSIVE_NO_MUTED":
                if(isMuted!=="NO") return null
                break;
            default:
                break;
        }
    }

    return (
        <label className={`panel-option ${inputEl.current?.checked ? "active" : ""}`}
            onChange={() => dispatch(selectOpt(option))}>
            <input
                type="radio"
                name="option"
                value={option.selection}
                ref={inputEl}
            />
            {option.text}
        </label>
    )
}