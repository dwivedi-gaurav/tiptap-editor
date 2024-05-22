import "./styles/style.css";
import { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import EditorControls from "./internals/EditorControls";
import { noteType } from "@/store/notesSlice";

function Editor({
  getNotesHtmlContent,
  content,
  setUpdateId,
}: {
  getNotesHtmlContent: (v: string) => void;
  content?: noteType;
  setUpdateId: (v: string) => void;
}) {
  const editor = useEditor({
    extensions: [StarterKit, TextStyle, Color],
  });

  useEffect(() => {
    if (!editor) return;
    console.log("Inside Effect");
    if (content) {
      console.log("content ===> ", content.noteHtml, typeof content.noteHtml);
      editor.commands.setContent(`${content.noteHtml}`);
    } else {
      editor.commands.setContent("<p>Write here...</p>");
    }
  }, [content, editor]);

  useEffect(() => {
    if (content) {
      editor?.commands.focus();
    }
  }, [content, editor]);

  if (!editor) return null;

  return (
    <div>
      <EditorControls editor={editor} />
      <EditorContent editor={editor} />

      <div className="editorActions">
        <button
          onClick={() => {
            getNotesHtmlContent(editor.getHTML());
            setUpdateId("");
            editor.commands.setContent(
              "<p class='text-gray-200'>Write here...</p>"
            );
          }}
          className="btn-default"
          style={{ marginRight: "1rem" }}
        >
          {content ? "Update" : "Save"}
        </button>
        {content ? (
          <button onClick={() => setUpdateId("")} className="btn-trans">
            Cancel
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Editor;
