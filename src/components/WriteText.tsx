import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { startWriting, stopWriting } from "../features/game/gameSlice";
import Typography from '@mui/material/Typography';

interface MyProps {
  children: string,
  interval: number
};

export default function WriteText(props:MyProps) {
  const [count, setCount] = useState<number>(1);
  const [intervalId, setIntervalId] = useState<undefined | NodeJS.Timer>();
  const dispatch = useDispatch();
  const text = props.children;

  useEffect(():VoidFunction => {
    return ():void => clearInterval(intervalId);
  }, [intervalId]);


  useEffect(():void => {
    setCount(0);
    text && dispatch(startWriting());
  }, [text, dispatch]);

  useEffect(():void => {
    if (count >= text.length) {
      dispatch(stopWriting());
    } else if (text.length && count < text.length) {
      dispatch(startWriting());
      let id = setInterval(() => {
        setCount(c => c + 1);
      }, props.interval);
      setIntervalId(id);
    };
  }, [props.interval, count, dispatch, text.length]);
  return (
    <Typography variant="subtitle1" >
      {text.slice(0, count)}
    </Typography>
  );
};