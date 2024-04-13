import {StateSchema} from "../StateSchema.ts";

export const getWidgets = (state: StateSchema) =>
  state.widgets.listItems

export const getIsDragging = (state: StateSchema) =>
  state.widgets.isDragging