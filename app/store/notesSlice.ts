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
    deleteNote: (state: NotesStateType, action: PayloadAction<string>) => {
      state.notes = state.notes.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addNotes, updateNotes, deleteNote } = notesSlice.actions;
export const notesReducer = notesSlice.reducer;
