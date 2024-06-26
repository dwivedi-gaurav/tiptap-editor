import "./styles/style.css";
import { noteType } from "@/store/notesSlice";
import { deleteNote } from "@/store/notesSlice";
import { useAppDispatch } from "@/store";

interface DisplayNotesProps {
  notes: noteType[];
  setUpdateId: (id: string) => void;
  updateId: string;
}

function DisplayNotes({ notes, setUpdateId }: DisplayNotesProps) {
  const dispatch = useAppDispatch();

  const onDeleteClick = (id: string) => {
    dispatch(deleteNote(id));
  };

  return (
    <div className="mt-8">
      <h4>Your Notes</h4>

      <div className="mt-4">
        {!notes.length
          ? "Nothing yet, make your first note!"
          : notes.map(({ id, noteHtml }) => {
              const markup = { __html: noteHtml };
              return (
                <div
                  key={id}
                  className="p-4 border rounded mb-4 flex justify-between"
                >
                  <div dangerouslySetInnerHTML={markup} />
                  <div className="actionContainer">
                    <button
                      onClick={() => {
                        setUpdateId(id);
                      }}
                      className="btn-default"
                    >
                      Edit
                    </button>
                    <button
                      className="btn-danger"
                      onClick={() => {
                        onDeleteClick(id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default DisplayNotes;
