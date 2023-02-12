import { AppBar, styled } from "@mui/material";

const NavStyled = styled(AppBar)(({ theme }) => ({
  justifyContent: "center",
  position: "sticky",
  minHeight: "13vh",
  backgroundImage: "none",
  "& .MuiToolbar-root": {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    "& > .MuiButton-root": {
      "& > .MuiTypography-h4": {
        transition: `all ${theme.transitions.duration.enteringScreen}ms`,
        transform: "scale(.85)",
        padding: "4px",
      },
      "&:hover > .MuiTypography-h4": {
        transform: "scale(1)",
      },
    },
    "& .MuiButtonGroup-root .MuiButtonGroup-grouped": {
      textTransform: "none",
      "& .MuiTypography-root": {
        transform: "scale(.85)",
        transition: `all ${theme.transitions.duration.enteringScreen}ms`,
      },
      "&:hover .MuiTypography-root": {
        transform: "scale(1)"
      },
    },
    "& .MuiButtonGroup-vertical": {
      display: "none"
    },
  },
  "@media (max-width: 768px)": {
    "& .MuiToolbar-root": {
      flexDirection: "column",
      gap: 0,
      "& .MuiButtonGroup-vertical": {
        display: "inline-flex"
      },
      "& .MuiButtonGroup-contained": {
        display: "none"
      },
    },
  }
}));

export default NavStyled