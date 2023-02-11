import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { LinkNav } from "../layouts/MainLayout";
import "../styles/Nav.css";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid, Grow, Icon, Popper } from "@mui/material";


export default function Nav({list}:{list: LinkNav[]}) {
  const [drop, setDrop] = useState<boolean>(false)
  const ToggleEl = useRef(null)

  const printItem = (item: LinkNav) => {
    return (
      <Grid item xs={12} key={item.title}>
        <Button variant="outlined" color="secondary"
          component={Link} to={item.to}
          onClick={() => setDrop(!drop)}
        >
          {item.title}
        </Button>
      </Grid>
    );
  };
  return (
    <AppBar position="absolute" color="transparent">
      <Toolbar>
        <Button variant="text" color="secondary"
          onClick={() => setDrop(!drop)}
          ref={ToggleEl}
          startIcon={drop ? <Icon>arrow_drop_down_icon</Icon> :
            <Icon>arrow_drop_up_icon</Icon>}
        >
          <Typography variant="h4">
            RITUALS
          </Typography>
        </Button>
        <Popper
          open={drop}
          anchorEl={ToggleEl.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps }) => (
            <Grow {...TransitionProps}>
              <Grid
                container
                flexDirection="column">
                {list.map(printItem)}
              </Grid>
            </Grow>
          )}
        </Popper>
      </Toolbar>
    </AppBar>
  );
};