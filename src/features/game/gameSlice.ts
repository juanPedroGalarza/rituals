import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import caps, { CapInterface, CapMultiple, OptionCap } from "../../assets/text/caps";

export interface UserState {
    selected: CapInterface,
    isWrited: boolean,
    optSelected: OptionCap,
    isFinal: boolean,
    isMuted: "" | "YES" | "NO",
    smily: number,
    feeling: "" | ":)" | ":(",
    smileEnd: boolean,
    writable: boolean,
    isRed: boolean
};


const optDefault: OptionCap = {
    text: "",
    selection: "",
    cap: 0
};

const initialState: UserState = {
    selected: caps[0].a,
    isWrited: false,
    optSelected: optDefault,
    isFinal: false,
    isMuted: "",
    smily: 0,
    feeling: "",
    smileEnd: false,
    writable: true,
    isRed: false
};

export const userSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        reset: () => ({ ...initialState, writable: false }),
        nextCap: (state, action: PayloadAction<OptionCap>) => {
            let opCap = action.payload.cap
            let opSel = action.payload.selection
            let cap: CapMultiple = caps[opCap]
            state.selected = cap[opSel]
            state.optSelected = optDefault
        },
        setWrited: (state, action: PayloadAction<boolean>) => {
            state.isWrited = action.payload
        },
        setWritable: (state, action: PayloadAction<boolean>) => {
            state.writable = action.payload
        },
        selectOpt: (state, action: PayloadAction<OptionCap>) => {
            state.optSelected = action.payload
        },
        setFinal: (state) => {
            state.isFinal = true
        },
        setMuted: (state, action: PayloadAction<"YES" | "NO">) => {
            state.isMuted = action.payload
        },
        setSmily: (state, action: PayloadAction<number>) => {
            state.smily = + action.payload
            if (state.smily > 0) {
                state.feeling = ":)"
            } else {
                state.feeling = ":("
            }
        },
        setSmileEnd: (state) => {
            state.smileEnd = true
        },
        setRed: (state) => {
            state.isRed = true
        },
    },
});
export const {
    reset,
    nextCap,
    setWrited,
    setWritable,
    selectOpt,
    setFinal,
    setMuted,
    setSmily,
    setSmileEnd,
    setRed
} = userSlice.actions;

export default userSlice.reducer;