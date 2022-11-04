import { createSlice } from '@reduxjs/toolkit'
import cap0 from "../../assets/text/cap0"
export const userSlice = createSlice({
    name: 'game',
    initialState: {
        selected: cap0,
    },
    reducers: {
        reset: (state) => {
            state.selected = cap0
        },
        nextCap: (state,action) => {
            let cap = action.payload.cap
            state.selected = cap[action.payload.selected]
        },
    },
})
export const { reset, nextCap } = userSlice.actions

export default userSlice.reducer