import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // default to localStorage
import { persistStore } from "redux-persist";
import taskReducer from "./reducers/taskReducer";

// Redux Persist configuration
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, taskReducer);

const store = configureStore({
  reducer: {
    tasks: persistedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
export default store;
