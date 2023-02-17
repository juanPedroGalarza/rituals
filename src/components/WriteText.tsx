import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWrited, UserState } from "../features/game/gameSlice";
import Typography from '@mui/material/Typography';
import { StoreInterface } from "../features/store";
import { red } from "@mui/material/colors";

interface MyProps {
  children: string,
  interval: number,
  forGame?: boolean
};

export default function WriteText(props:MyProps) {
  const [count, setCount] = useState<number>(1);
  const { writable, isRed } =
    useSelector<StoreInterface, UserState>(state => state.game);
  const [intervalId, setIntervalId] = useState<undefined | NodeJS.Timer>();
  const dispatch = useDispatch();
  const text = props.children;
  const { forGame } = props;

  useEffect(():VoidFunction => {
    return (): void => { clearInterval(intervalId) };
  }, [intervalId]);

  useEffect((): void => {
    text && setCount(0);
    dispatch(setWrited(false));
  }, [text, dispatch]);



  useEffect(():void => {
    if (count >= text.length) {
      forGame && dispatch(setWrited(true));
    } else if (text.length && count < text.length) {
      forGame && dispatch(setWrited(false));
      let id: NodeJS.Timer = setInterval(() => {
        setCount(c => c + 1);
      }, props.interval);
      setIntervalId(id);
    };
  }, [props.interval, count, dispatch, text.length]);
  return (
    <Typography variant="subtitle1" color={isRed? red[500]:"inherit"}>
      {writable || !forGame ? text.slice(0, count) : null}
    </Typography>
  );
};