import { createSlice, PayloadAction, SliceCaseReducers } from '@reduxjs/toolkit';
import caps, { CapInterface, OptionCap } from "../../assets/text/caps";

export interface UserState {
    selected: CapInterface,
    isWrited: boolean,
    optSelected: string | null,
    isFinal: boolean,
    isMuted: "" | "YES" | "NO",
    smily: number,
    feeling: "" | ":)" | ":("
};



export const userSlice = createSlice
    <UserState, SliceCaseReducers<UserState>, 'game'>
    ({
    name: 'game',
    initialState: {
        selected: caps[0].a,
        isWrited: false,
        optSelected: null,
        isFinal: false,
        isMuted: "",
        smily: 0,
        feeling: ""
    },
    reducers: {
        reset: (state) => {
            state.selected = caps[0].a
            state.isWrited = false
            state.optSelected = null
            state.isFinal = false
            state.isMuted = ""
            state.smily = 0
        },
        nextCap: (state,action: PayloadAction<OptionCap>) => {
            let cap = caps[action.payload.cap]
            state.selected = cap[action.payload.selection]
            state.optSelected = null
            state.isWrited = false
        },
        stopWriting: (state) => {
            state.isWrited = true
        },
        startWriting: (state) => {
            state.isWrited = false
        },
        selectOpt: (state, action: PayloadAction<string>) => {
            state.optSelected = action.payload
        },
        emptyText: (state) => {
            state.isWrited = false
        },
        setFinal: (state) => {
            state.isFinal = true
        },
        setMuted: (state,action: PayloadAction<"YES" | "NO">)=>{
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
})
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