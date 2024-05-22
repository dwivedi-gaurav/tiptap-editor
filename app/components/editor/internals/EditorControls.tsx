import "../styles/style.css";
import { Editor } from "@tiptap/core";

interface EditorControlsProps {
  editor: Editor;
}

function EditorControls({ editor }: EditorControlsProps) {
  return (
    <div className="editorControls">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`${editor.isActive("bold") ? "is-active" : ""} btn-dark`}
      >
        <strong>B</strong>
      </button>

      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`${editor.isActive("italic") ? "is-active" : ""} btn-dark`}
      >
        <em>I</em>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`${editor.isActive("strike") ? "is-active" : ""} btn-dark`}
      >
        <s>S</s>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={`${editor.isActive("code") ? "is-active" : ""} btn-dark`}
      >
        code
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`${
          editor.isActive("paragraph") ? "is-active" : ""
        } btn-dark`}
      >
        paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`${
          editor.isActive("heading", { level: 1 }) ? "is-active" : ""
        } btn-dark`}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`${
          editor.isActive("heading", { level: 2 }) ? "is-active" : ""
        } btn-dark`}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`${
          editor.isActive("heading", { level: 3 }) ? "is-active" : ""
        } btn-dark`}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={`${
          editor.isActive("heading", { level: 4 }) ? "is-active" : ""
        } btn-dark`}
      >
        h4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={`${
          editor.isActive("heading", { level: 5 }) ? "is-active" : ""
        } btn-dark`}
      >
        h5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={`${
          editor.isActive("heading", { level: 6 }) ? "is-active" : ""
        } btn-dark`}
      >
        h6
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`${
          editor.isActive("bulletList") ? "is-active" : ""
        } btn-dark`}
      >
        bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`${
          editor.isActive("orderedList") ? "is-active" : ""
        } btn-dark`}
      >
        ordered list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`${
          editor.isActive("codeBlock") ? "is-active" : ""
        } btn-dark`}
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className="btn-dark"
      >
        undo
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className="btn-dark"
      >
        redo
      </button>
      <button
        onClick={() => editor.chain().focus().setColor("#958DF1").run()}
        className={`${
          editor.isActive("textStyle", { color: "#958DF1" }) ? "is-active" : ""
        } btn-dark`}
      >
        purple
      </button>
      <button
        onClick={() => editor.chain().focus().setColor("#F98181").run()}
        className={`${
          editor.isActive("textStyle", { color: "#F98181" }) ? "is-active" : ""
        } btn-dark`}
        data-testid="setRed"
      >
        red
      </button>
      <button
        onClick={() => editor.chain().focus().setColor("#70CFF8").run()}
        className={`${
          editor.isActive("textStyle", { color: "#70CFF8" }) ? "is-active" : ""
        } btn-dark`}
        data-testid="setBlue"
      >
        blue
      </button>
      <button
        onClick={() => editor.chain().focus().unsetColor().run()}
        data-testid="unsetColor"
        className="btn-dark"
      >
        unsetColor
      </button>
    </div>
  );
}

export default EditorControls;
