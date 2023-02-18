import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { LinkNav } from "../layouts/MainLayout";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ButtonGroup, Container, Icon } from "@mui/material";
import NavStyled from "./styled/NavStyled";
import { useSelector } from "react-redux";
import { StoreInterface } from "../features/store";
import { UserState } from "../features/game/gameSlice";

export default function Nav({ list }: { list: LinkNav[] }) {
  const [drop, setDrop] = useState<boolean>(false);
  const ToggleEl = useRef(null);
  const { isRed } = useSelector<StoreInterface, UserState>(
    (state) => state.game
  );

  const printItem = (item: LinkNav) => {
    return (
      <Button
        color={isRed ? "secondary" : "primary"}
        variant="text"
        component={Link}
        to={item.to}
        onClick={() => setDrop(!drop)}
        key={item.title}>
        <Typography variant="h5">{item.title}</Typography>
      </Button>
    );
  };

  return (
    <NavStyled>
      <Container maxWidth="xl">
        <Toolbar>
          <Button
            variant="text"
            color="secondary"
            onClick={() => setDrop(!drop)}
            ref={ToggleEl}
            startIcon={
              drop ? <Icon>menu_open_icon</Icon> : <Icon>menu_icon</Icon>
            }>
            <Typography variant="h4">RITUALS</Typography>
          </Button>
          {drop ? (
            <>
              <ButtonGroup
                color={isRed ? "secondary" : "primary"}
                variant="contained">
                {list.map(printItem)}
              </ButtonGroup>
              <ButtonGroup
                color={isRed ? "secondary" : "primary"}
                variant="outlined"
                orientation="vertical">
                {list.map(printItem)}
              </ButtonGroup>
            </>
          ) : null}
        </Toolbar>
      </Container>
    </NavStyled>
  );
};