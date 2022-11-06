import { useRef } from "react"
import { useDispatch } from "react-redux"
import { selectOpt } from "../features/game/gameSlice"

export default function OptionCap({option}) {
    const dispatch = useDispatch()
    const inputEl = useRef(null)
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