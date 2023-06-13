import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import { userApi } from "./services/userApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import userApiReducer from "./features/userSlice";
import locationApiReducer from "./features/locationSlice";
import characterApiReducer from "./features/charactersSlice";
import characterDetailApiReducer from "./features/charDetailslice";

export const store = configureStore({
  reducer: {
    counterReducer,
    usere: userApiReducer,
    locations: locationApiReducer,
    characters: characterApiReducer,
    characterDetail: characterDetailApiReducer,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
