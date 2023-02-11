import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./game/gameSlice";
import themeReducer from "./theme/themeSlice";

export const store  = configureStore({
    reducer: {
        game: gameReducer,
        theme: themeReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        inmutableCheck: false,
        serializableCheck: false,
    }),
});

