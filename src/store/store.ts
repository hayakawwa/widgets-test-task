import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {widgetsReducer} from "./slices/widgetsSlice.tsx";
import {weatherAppReducer} from "./slices/weatherAppSlice.ts";
import {clockAppReducer} from "./slices/clockAppSlice.ts";

const rootReducer = combineReducers({
  widgets: widgetsReducer,
  weatherApp: weatherAppReducer,
  clockApp: clockAppReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({serializableCheck: false})
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']
export type AppStore = ReturnType<typeof setupStore>

