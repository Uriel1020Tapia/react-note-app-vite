import Note from "./note/Note";
import "./NoteContainer.css";

const NoteContainer = (props) => {
  const reverArray = (arr) => {
    const array = [];

    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }

    return array;
  };

  const notes = reverArray(props.notes);

  return (
    <div className='note-coontainer'>
        <h2>Notes</h2>
        <div className='note-container_notes custom-scroll'>
        {notes?.length > 0 ? (
          notes.map((item) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <h3>No Notes present</h3>
        )}
        </div>
    </div>
  )
}

export default NoteContainer
