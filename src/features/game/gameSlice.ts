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
    smileEnd: boolean
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
    smileEnd: false
}

export const userSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        reset: () => initialState,
        nextCap: (state, action: PayloadAction<OptionCap>) => {
            let opCap = action.payload.cap
            let opSel = action.payload.selection
            let cap: CapMultiple = caps[opCap]
            state.selected = cap[opSel]
            state.optSelected = optDefault
            state.isWrited = false
        },
        stopWriting: (state) => {
            state.isWrited = true
        },
        startWriting: (state) => {
            state.isWrited = false
        },
        selectOpt: (state, action: PayloadAction<OptionCap>) => {
            state.optSelected = action.payload
        },
        emptyText: (state) => {
            state.isWrited = false
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
    },
});
export const {
    reset,
    nextCap,
    stopWriting,
    startWriting,
    selectOpt,
    emptyText,
    setFinal,
    setMuted,
    setSmily,
    setSmileEnd
} = userSlice.actions;

export default userSlice.reducer;