import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ClockAppSchema, IClock} from "../schemas/clockAppSchema.ts";

const initialState: ClockAppSchema = {
  data: []
}
export const clockAppSlice = createSlice({
  name: 'clockApp',
  initialState,
  reducers: {
    initializeData: (state, action: PayloadAction<IClock>) => {
      state.data.push(
        {
          id: action.payload.id,
          mode: action.payload.mode
        }
      )
    },
    setMode: (state, action: PayloadAction<IClock>) => {
      state.data
        .filter(item => item.id === action.payload.id)
        .map(item => {
          item.mode = action.payload.mode
        })
    }
  }
})

export const { actions: clockAppActions } = clockAppSlice;
export const { reducer: clockAppReducer } = clockAppSlice;