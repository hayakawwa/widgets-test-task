import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Column, IWidget, WidgetsSchema} from "../schemas/widgetsSchema.ts";

const initialState: WidgetsSchema = {
  listItems: [],
  isDragging: false
}
export const widgetsSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    handleUpdateList: (state, action: PayloadAction<{id: number, column: Column}>) => {
      const card = state.listItems.find(item => item.id === action.payload.id)

      if (card && card.column !== action.payload.column) {
        card.column = action.payload.column
        if (Array.isArray(state.listItems)) {
          state.listItems = [card!,
            ...state.listItems.filter(item => item.id !== action.payload.id)]
        }
      }
    },
    handleDragging: (state, action) => {
      state.isDragging = action.payload
    },
    addWidget: (state, action: PayloadAction<IWidget>) => {
      state.listItems.push(action.payload)
    },
    removeWidget: (state, action: PayloadAction<{id: number}>) => {
      state.listItems = state.listItems.filter(item => item.id !== action.payload.id)
    }
  }})

export const { actions: widgetsActions } = widgetsSlice;
export const { reducer: widgetsReducer } = widgetsSlice;