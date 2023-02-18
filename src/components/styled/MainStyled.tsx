import {
  Container,
  styled,
  Box,
  BoxProps,
  ContainerProps,
} from "@mui/material";

const MainParent = styled(Box)(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.default,
  "& > .MuiContainer-root": {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    minHeight: "87vh",
    gap: "10px",
  },
}));

export default function MainStyled(
  props: ContainerProps & { mainParentProps?: BoxProps }
): JSX.Element {
  return (
    <MainParent {...props.mainParentProps}>
      <Container maxWidth="xl" {...props}>
        {props.children}
      </Container>
    </MainParent>
  );
}