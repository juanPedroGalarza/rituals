import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import OptionCapButton from "./OptionCapButton"
import {
  nextCap,
  setFinal,
  reset,
  setMuted,
  setSmily,
  UserState,
  setSmileEnd
} from "../features/game/gameSlice";
import { StoreInterface } from "../features/store";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { useState } from "react";

export default function PanelOptions() {

  const { isWrited, isFinal, selected, optSelected }
    = useSelector<StoreInterface, UserState>((state) => state.game);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const toDoSelected = (action: string) => {
    switch (action) {
      case "IS_MUTED":
        dispatch(setMuted("YES"));
        break;
      case "NO_MUTED":
        dispatch(setMuted("NO"));
        break;
      case "HAPPY":
        dispatch(setSmily(1));
        break;
      case "SAD":
        dispatch(setSmily(-1));
        break;
      case "HAPPY_END":
        dispatch(setSmily(1));
        dispatch(setSmileEnd());
        break;
      case "SAD_END":
        dispatch(setSmily(-1));
        dispatch(setSmileEnd());
        break;
      default:
        break;
    };
  };

  const next = () => {
    setIsSelected(false);
    setTimeout(() => {
      if (optSelected.cap > 0) {
        optSelected.action && toDoSelected(optSelected.action);
        dispatch(nextCap(optSelected));
      } else {
        dispatch(setFinal());
      };
    }, 1000);
  };
  const playAgain = () => {
    setTimeout(() => {
      dispatch(reset());
    }, 1000);
  };


  function finalOptions() {
    return (
      <>
        <Button
          color="primary"
          variant="contained"
          onClick={playAgain}
        >SI</Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => navigate("/")}
        >NO</Button>
      </>
    );
  };

  return (
    <Box className="panel-options">
      {isWrited ?
        isFinal ?
          finalOptions()
          :
          <>
            <OptionCapButton options={selected.options} select={(v:boolean)=>setIsSelected(v)} />
            <Button
              type="button"
              variant="contained"
              color="primary"
              disabled={!isSelected}
              onClick={isSelected ? next : undefined}>
              {isSelected ? "Continuar" : "Elige"}</Button>
          </>
        : null
      }
    </Box>
  );
};