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

  const handleSubmit = (
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

  return (
    <div className="app-container">
      <form 
        className="note-form"
        onSubmit={(e) => handleSubmit(e)}
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
        <button type="submit">
          Add Note
        </button>
      </form>
      <div className="notes-grid">
        {notes.map((note) => (
          <div className="note-item">
            <div className="notes-header">
              <button>x</button>
            </div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}