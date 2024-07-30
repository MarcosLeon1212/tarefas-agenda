import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reducers/taskReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from "redux-persist/lib/storage";


const taskPersistConfig = {
  key: "task",
  storage: AsyncStorage,
  blacklist: ["somethingTemporary"],
};

const persistedReducer = persistReducer(taskPersistConfig, taskReducer);

export const store = configureStore({
  reducer: {
    task: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
