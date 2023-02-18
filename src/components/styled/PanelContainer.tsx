import { Container, styled } from "@mui/material";

const PanelContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: 20,
  width: "100%",
  minHeight: "87vh",
  padding: "2vmax",
  "& .MuiPaper-root.panel-text": {
    width: "100%",
    padding: "2rem",
    minHeight: "15vh",
  },
  "& > .MuiBox-root.panel-options": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    "& .panel-options-list": {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
  },
}));

export default PanelContainer;
