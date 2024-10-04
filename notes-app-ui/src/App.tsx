import { useState } from "react";
import "./App.css"

type Note = {
  id: number;
  title: string;
  content: string;
}

export default function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 0,
      title: "title 0",
      content: "content 0"
    },
    {
      id: 1,
      title: "title 1",
      content: "content 1"
    },
    {
      id: 2,
      title: "title 2",
      content: "content 2"
    },
    {
      id: 3,
      title: "title 3",
      content: "content 3"
    }
  ])
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  const handleNoteClick = (note: Note) => {
    setSelectedNote(note);
    setTitle(note.title)
    setContent(note.content)
  }

  const handleUpdateNote = (event: React.FormEvent) => {
    event.preventDefault()

    if(!selectedNote) {
      return 
    }

    const updatedNote: Note = {
      id: selectedNote.id,
      title: title,
      content: content
    }

    const updatedNoteList = notes.map((note) => (
      note.id === selectedNote.id ? updatedNote : note
    ))

    setNotes(updatedNoteList)
    setTitle("")
    setContent("")
    setSelectedNote(null)
  }

  const handleCancel = () => {
    setTitle("")
    setContent("")
    setSelectedNote(null)
  }

  const handleAddNote = (
    event: React.FormEvent
  ) => {
    event.preventDefault();
    const newNote: Note = {
      id: notes.length + 1,
      title: title,
      content: content
    }
    setNotes([newNote, ...notes])
    setTitle("")
    setContent("")
  }

  const deleteNote = (
    event: React.FormEvent,
    noteId: number
  ) => {
    event.stopPropagation()

    const updatedNotes = notes.filter((note) => note.id !== noteId)
    setNotes(updatedNotes)
  }

  return (
    <div className="app-container">
      <form 
        className="note-form"
        onSubmit={(e) => 
          selectedNote
            ? handleUpdateNote(e)
            : handleAddNote(e)
        }
      >
        <input 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          rows={10}
          required
        />
        {selectedNote ? (
          <div className="edit-buttons">
            <button type="submit">Save</button>
            <button onClick={handleCancel}>
              Cancel
            </button>
          </div>
        ) : (
          <button type="submit">Add Note</button>
        )}
      </form>
      <div className="notes-grid">
        {notes.map((note) => (
          <div 
            className="note-item"
            onClick={() => handleNoteClick(note)}
          >
            <div className="notes-header">
              <button
                onClick={(e) => deleteNote(e, note.id)}
              >
                x
              </button>
            </div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}