import PanelText from "../components/PanelText";
import PanelOptions from "../components/PanelOptions";
import MainStyled from "../components/styled/MainStyled";
import PanelContainer from "../components/styled/PanelContainer";
import { useDispatch, useSelector } from "react-redux";
import { StoreInterface } from "../features/store";
import { setWrited, UserState } from "../features/game/gameSlice";
import { useEffect } from "react";

export default function Play() {
  const { isWrited, writable } =
    useSelector<StoreInterface, UserState>(state => state.game);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setWrited(false))
  }, [dispatch]);

  return (
    <MainStyled>
      <PanelContainer maxWidth="md">
        <PanelText />
        {isWrited && writable ?
        <PanelOptions />
        :null}
      </PanelContainer>
    </MainStyled>
  );
};