import cap0 from "./caps/cap0";
import cap1 from "./caps/cap1";
import cap2 from "./caps/cap2";
import cap3 from "./caps/cap3";
import cap4 from "./caps/cap4";
import cap5 from "./caps/cap5";
import cap6 from "./caps/cap6";
import cap7 from "./caps/cap7";
import cap8 from "./caps/cap8";
import cap9 from "./caps/cap9";
import cap10 from "./caps/cap10";
import cap11 from "./caps/cap11";

export interface OptionCap{
    text: string,
    selection: string,
    cap: number,
    action?: "NO_MUTED" | "IS_MUTED" | "HAPPY" | "SAD" | "HAPPY_END" | "SAD_END",
    condition?: "MUTED" | "NO_MUTED" | "EXCLUSIVE_MUTED" | "EXCLUSIVE_NO_MUTED"
};
export interface CapInterface {
    text: string,
    options: Array<OptionCap>
};

export interface CapMultiple {
    [key: string]: CapInterface
};

const caps: Array<CapMultiple> = [
    cap0,
    cap1,
    cap2,
    cap3,
    cap4,
    cap5,
    cap6,
    cap7,
    cap8,
    cap9,
    cap10,
    cap11,
];
export default caps;