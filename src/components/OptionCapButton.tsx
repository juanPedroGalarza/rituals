import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { OptionCap } from "../assets/text/caps";
import { selectOpt, UserState } from "../features/game/gameSlice";
import { StoreInterface } from "../features/store";

export default function OptionCapButton({
  options,
  select,
}: {
  options: OptionCap[];
  select: (v: boolean) => void;
}) {
  const { isMuted, optSelected, isRed } = useSelector<
    StoreInterface,
    UserState
  >((state) => state.game);
  const dispatch = useDispatch();

  const onChangeToggle = (e: React.MouseEvent, optionVal: OptionCap): void => {
    dispatch(selectOpt(optionVal));
    select(Boolean(optionVal));
  };

  return (
    <ToggleButtonGroup
      orientation="vertical"
      exclusive
      value={optSelected}
      onChange={onChangeToggle}
      fullWidth
      color={isRed ? "secondary" : "primary"}
      className="panel-options-list">
      {options.map((option, i) => {
        if (option.condition) {
          switch (option.condition) {
            case "MUTED":
              if (isMuted === "NO") return null;
              break;
            case "NO_MUTED":
              if (isMuted === "YES") return null;
              break;
            case "EXCLUSIVE_MUTED":
              if (isMuted !== "YES") return null;
              break;
            case "EXCLUSIVE_NO_MUTED":
              if (isMuted !== "NO") return null;
              break;
            default:
              break;
          };
        };
        return (
          <ToggleButton
            color={isRed ? "secondary" : "primary"}
            value={option}
            sx={{ textTransform: "none" }}
            key={i}>
            <Typography variant="body2">{option.text}</Typography>
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
}
