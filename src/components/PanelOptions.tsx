import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OptionCapButton from "./OptionCapButton";
import {
  nextCap,
  setFinal,
  reset,
  setMuted,
  setSmily,
  UserState,
  setSmileEnd,
  setWritable,
  setRed
} from "../features/game/gameSlice";
import { StoreInterface } from "../features/store";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { useCallback, useState } from "react";

export default function PanelOptions() {

  const { isFinal, selected, optSelected, isRed }
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
      case "RED":
        dispatch(setRed());
        break;
      default:
        break;
    };
  };

  const next = () => {
    setIsSelected(false);
    dispatch(setWritable(false));
    if (optSelected.cap > 0) {
      optSelected.action && toDoSelected(optSelected.action);
      dispatch(nextCap(optSelected));
    } else {
      dispatch(setFinal());
    };
    setTimeout((): void => {
      dispatch(setWritable(true));
    }, 500);
  };
  const playAgain = useCallback(() => {
    dispatch(reset());
    setTimeout((): void => {
      dispatch(setWritable(true));
    }, 500);
  }, []);


  function finalOptions() {
    return (
      <>
        <Button
          color={isRed?"secondary":"primary"}
          variant="contained"
          onClick={playAgain}
        >SI</Button>
        <Button
          color={isRed?"secondary":"primary"}
          variant="contained"
          onClick={() => navigate("/")}
        >NO</Button>
      </>
    );
  };

  return (
    <Box className="panel-options">
      {isFinal ?
        finalOptions()
        :
        <>
          <OptionCapButton options={selected.options} select={(v: boolean) => setIsSelected(v)} />
          <Button
            type="button"
            variant="contained"
            color={isRed?"secondary":"primary"}
            disabled={!isSelected}
            onClick={isSelected ? next : undefined}>
            {isSelected ? "Continuar" : "Elige"}</Button>
        </>
      }
    </Box>
  );
};