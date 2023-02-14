import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import caps, { CapInterface, CapMultiple, OptionCap } from "../../assets/text/caps";

export interface UserState {
    selected: CapInterface,
    isWrited: boolean,
    optSelected: OptionCap,
    isFinal: boolean,
    isMuted: "" | "YES" | "NO",
    smily: number,
    feeling: "" | ":)" | ":("
};


const optDefault: OptionCap = {
    text: "",
    selection: "",
    cap: 0
};

export const userSlice = createSlice({
    name: 'game',
    initialState: {
        selected: caps[0].a,
        isWrited: false,
        optSelected: optDefault,
        isFinal: false,
        isMuted: "",
        smily: 0,
        feeling: ""
    } as UserState,
    reducers: {
        reset: (state) => {
            state.selected = caps[0].a
            state.isWrited = false
            state.optSelected = optDefault
            state.isFinal = false
            state.isMuted = ""
            state.smily = 0
        },
        nextCap: (state) => {
            let opCap = state.optSelected.cap
            let opSel = state.optSelected.selection
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
        }
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
    setSmily } = userSlice.actions;

export default userSlice.reducer;