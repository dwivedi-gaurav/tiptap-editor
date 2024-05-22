import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export interface noteType {
  id: string;
  noteHtml: string;
}

export interface NotesStateType {
  notes: noteType[];
}

const initialState = {
  notes: [],
};

export const notesSlice = createSlice({
  name: "myNotes",
  initialState,
  reducers: {
    addNotes: (state: NotesStateType, action: PayloadAction<string>) => {
      state.notes.push({
        id: uuidv4(),
        noteHtml: action.payload,
      });
    },
    updateNotes: (state: NotesStateType, action: PayloadAction<noteType>) => {
      const { id } = action.payload;
      state.notes.forEach((note) => {
        if (note.id === id) {
          note.noteHtml = action.payload.noteHtml;
        }
      });
    },
  },
});

export const { addNotes, updateNotes } = notesSlice.actions;
export const notesReducer = notesSlice.reducer;
