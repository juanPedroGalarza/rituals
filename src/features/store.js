import { configureStore } from "@reduxjs/toolkit"
import gameReducer from "./game/gameSlice"
export const store = configureStore({
    reducer: {
        game: gameReducer
        },
})

