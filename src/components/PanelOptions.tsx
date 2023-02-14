import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import OptionCapButton from "./OptionCapButton"
import {
  nextCap,
  emptyText,
  setFinal,
  reset,
  setMuted,
  setSmily,
  UserState,
  setSmileEnd
} from "../features/game/gameSlice"
import { StoreInterface } from "../features/store"

export default function PanelOptions() {

  const { isWrited, isFinal, selected, optSelected }
    = useSelector<StoreInterface, UserState>((state) => state.game)
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
    const toDoSelected = (action:string) => {
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
              dispatch(setSmileEnd())
              break;
          case "SAD_END":
              dispatch(setSmily(-1))
              dispatch(setSmileEnd())
              break;
          default:
              break;
      }
  }

  const next = () => {
      dispatch(emptyText())
      setTimeout(() => {
          if (optSelected.cap > 0) {
              optSelected.action && toDoSelected(optSelected.action)
              dispatch(nextCap(optSelected))
          } else {
              dispatch(setFinal())
          }
      },500)
  }
  const playAgain = () => {
      dispatch(emptyText())
      setTimeout(() => {
          dispatch(reset())
      },500)
  }

  return (
    <>
      {isWrited ? isFinal ?
        <>
          <button
            type="button"
            className="panel-submit"
            onClick={playAgain}
          >SI</button>
          <button
            type="button"
            className="panel-submit"
            onClick={() => navigate("/")}
          >NO</button>
        </>
        : <form className="panel-form">
          <div className="panel-options">
            {selected.options.map((o, i) =>
              <OptionCapButton key={i} option={o} />)}
          </div>
          <button
            type="button"
            className={`panel-submit ${optSelected ? "" : "chose"}`}
            onClick={optSelected ? next : undefined}>
            {optSelected ? "Continuar" : "Elige"}</button>
        </form>
        : null
      }
    </>
  );
}