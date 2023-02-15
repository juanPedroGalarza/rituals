import { Container, styled } from "@mui/material";

const PanelContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 20,
  width: "100%",
  minHeight: "100%",
  padding: "2vmax",
}));

export default PanelContainer;