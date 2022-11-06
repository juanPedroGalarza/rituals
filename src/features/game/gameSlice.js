import { createSlice } from '@reduxjs/toolkit'
import caps from "../../assets/text/caps"
export const userSlice = createSlice({
    name: 'game',
    initialState: {
        selected: caps[0],
        isWrited: false,
        optSelected: null
    },
    reducers: {
        reset: (state) => {
            state.selected = caps[0]
            state.isWrited = false
            state.optSelected = null
        },
        nextCap: (state,action) => {
            let cap = caps[action.payload.cap]
            state.selected = cap[action.payload.selection]
            state.optSelected = null
        },
        stopWriting: (state) => {
            state.isWrited = false
        },
        startWriting: (state) => {
            state.isWrited = true
        },
        selectOpt: (state, action) => {
            state.optSelected = action.payload
        }
    },
})
export const {
    reset,
    nextCap,
    stopWriting,
    startWriting,
    selectOpt } = userSlice.actions

export default userSlice.reducer