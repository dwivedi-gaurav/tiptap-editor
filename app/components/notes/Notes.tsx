"use client";

import { useState } from "react";
import Editor from "../editor/Editor";
import DisplayNotes from "./DisplayNotes";
import { useAppSelector } from "@/store";
import { addNotes, updateNotes } from "@/store/notesSlice";
import { useAppDispatch } from "@/store";

function Notes() {
  const [updateId, setUpdateId] = useState("");
  const [notesEditor, setNotesEditor] = useState(null);
  const dispatch = useAppDispatch();

  const { notes } = useAppSelector((state) => {
    return state.myNotes;
  });

  console.log("updateId ===> ", updateId);

  const updateContent = !!updateId
    ? notes.find(({ id }) => id === updateId)
    : undefined;

  console.log("updateContent ===> ", updateContent);

  const setNotesHtml = (noteHtml: string) => {
    if (updateId) {
      dispatch(updateNotes({ id: updateId, noteHtml }));
    } else {
      dispatch(addNotes(noteHtml));
    }
  };

  return (
    <div className="p-16">
      <Editor
        getNotesHtmlContent={setNotesHtml}
        content={updateContent}
        setUpdateId={setUpdateId}
      />
      <DisplayNotes
        notes={notes}
        setUpdateId={setUpdateId}
        updateId={updateId}
      />
    </div>
  );
}

export default Notes;
