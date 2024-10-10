import { createContext, useContext, useEffect, useState } from 'react';

export interface NoteType {
  _id?: string,
  title: string,
  content: string,
  date: Date
}

interface NoteContextType {
  notes: NoteType[],
  addNote: (note: NoteType) => void,
  updateNote: (id: string) => void,
  deleteRecord: (id: string) => void,
}

export const NoteContext = createContext<NoteContextType | null>(null)

const BASE_URL = 'http://localhost:3001/notes'

export const NoteProvider = ({
  children
}: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<NoteType[]>([])

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
      method: "POST",
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

  return (
    <NoteContext.Provider value={{notes, addNote}}>
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