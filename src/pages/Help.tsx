import WriteText from "../components/WriteText";
import MainStyled from "../components/styled/MainStyled";

export default function Help(){
  return (
    <MainStyled>
      <div style={{ width: "100%", maxWidth: 400 }}>
        <WriteText interval={30}>
          Cada vez que avances se te presentaran varias opciones
          La historia cambiara por cada eleccion que tomes.
          Asi que ten mucho cuidado con lo que eliges</WriteText>
      </div>
    </MainStyled>
  );
};