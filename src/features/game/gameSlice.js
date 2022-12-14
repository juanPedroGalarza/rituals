import { createSlice } from '@reduxjs/toolkit'
import caps from "../../assets/text/caps"
export const userSlice = createSlice({
    name: 'game',
    initialState: {
        selected: caps[0],
        isWrited: false,
        optSelected: null,
        isFinal: false,
        isMuted: null,
        smily: 0,
        feeling: ""
    },
    reducers: {
        reset: (state) => {
            state.selected = caps[0]
            state.isWrited = false
            state.optSelected = null
            state.isFinal = false
            state.isMuted = null
            state.smily = 0
        },
        nextCap: (state,action) => {
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
        selectOpt: (state, action) => {
            state.optSelected = action.payload
        },
        emptyText: (state) => {
            state.selected = null
            state.isWrited = false
        },
        setFinal: (state) => {
            state.isFinal = true
        },
        setMuted: (state,action)=>{
            state.isMuted = action.payload
        },
        setSmily: (state, action) => {
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
    setSmily } = userSlice.actions

export default userSlice.reducer