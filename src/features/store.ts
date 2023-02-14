import { configureStore } from "@reduxjs/toolkit";
import gameReducer, { UserState } from "./game/gameSlice";
import themeReducer, { ThemeState } from "./theme/themeSlice";

export interface StoreInterface {
    game: UserState,
    theme: ThemeState
};

export const store  = configureStore<StoreInterface>({
    reducer: {
        game: gameReducer,
        theme: themeReducer
    }
});

