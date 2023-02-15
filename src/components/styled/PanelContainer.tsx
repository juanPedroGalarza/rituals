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
    borderRadius: 10,
    border: `3px solid ${theme.palette.text.primary}`,
    padding: "2rem",
    minHeight: 200,
  }
}));

export default PanelContainer;