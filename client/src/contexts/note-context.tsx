import { 
  createContext, 
  useCallback,
  useContext, 
  useEffect, 
  useState 
} from 'react';

export interface NoteType {
  _id?: string,
  title: string,
  content: string,
  createdAt?: Date,
  updatedAt?: Date
}

interface NoteContextType {
  notes: NoteType[],
  selectedNote: NoteType | null,
  addNote: (note: NoteType) => void,
  updateNote: (id: string, note: NoteType) => void,
  deleteNote: (id: string) => void,
  selectNote: (id: string) => void,
}

export const NoteContext = createContext<NoteContextType | null>(null)

const BASE_URL = 'http://localhost:3001/notes'

export const NoteProvider = ({
  children
}: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<NoteType[]>([])
  const [selectedNote, setSelectedNote] = useState<NoteType | null>(null)

  const selectNote = useCallback((noteId: string) => {
    let selected = notes.filter(note => note?._id === noteId)

    if(selected.length === 0 && noteId !== "") {
      throw new Error('Selected note not found')
    }
    setSelectedNote(selected[0])
  }, [notes])

  const fetchNotes = async () => {
    const response = await fetch(`${BASE_URL}/getAllNotes`);

    if(response.ok) {
      const jsonNotes = await response.json()
      setNotes(jsonNotes)
    }
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  const addNote = async (note: NoteType) => {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    try {
      if(response.ok) {
        const newNote = await response.json()
        setNotes((prev) => [...prev, newNote])
      }
    } catch (err) {
      throw new Error(`Could not add new note: ${err}`)
    }
  }

  const updateNote = async (id: string, note: NoteType) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    try {
      if(response.ok) {
        const newNote = await response.json()
        setNotes((prev) => prev.map(prevNote => {
          if(prevNote._id === id) {
            return newNote
          } else {
            return prevNote
          }
        }))
      }
    } catch (err) {
      throw new Error(`Could not update note: ${err}`)
    }
  }

  const deleteNote = async (id:string) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    })

    try {
      if(response.ok) {
        const deleteNote = await response.json()
        setNotes((prev) => prev.filter(note => note._id !== deleteNote._id))
      }
    } catch (err) {
      throw new Error(`Could not delete note: ${err}`)
    }
  }

  return (
    <NoteContext.Provider value={{notes, selectedNote, addNote, updateNote, deleteNote, selectNote}}>
      {children}
    </NoteContext.Provider>
  )
}

export const useNotes = () => {
  const context = useContext<NoteContextType | null>(
    NoteContext
  );

  if(!context) {
    throw new Error('useNotes must be within a NotesProvider')
  }

  return context
}