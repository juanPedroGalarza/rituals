import PanelText from "../components/PanelText";
import PanelOptions from "../components/PanelOptions";
import MainStyled from "../components/styled/MainStyled";
import PanelContainer from "../components/styled/PanelContainer";

export default function Play() {
  return (
    <MainStyled>
      <PanelContainer maxWidth="md">
        <PanelText />
        <PanelOptions />
      </PanelContainer>
    </MainStyled>
  );
};