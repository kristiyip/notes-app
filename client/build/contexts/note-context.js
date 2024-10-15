import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
export const NoteContext = createContext(null);
const BASE_URL = process.env.NODE_ENV !== 'production' ? 'http://localhost:3001/api/notes' : `${process.env.NODE_ENV}/api/notes`;
export const NoteProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);
    const selectNote = useCallback((noteId) => {
        let selected = notes.filter(note => note?._id === noteId);
        if (selected.length === 0 && noteId !== "") {
            throw new Error('Selected note not found');
        }
        setSelectedNote(selected[0]);
    }, [notes]);
    const fetchNotes = async () => {
        const response = await fetch(`${BASE_URL}/getAllNotes`);
        if (response.ok) {
            const jsonNotes = await response.json();
            setNotes(jsonNotes);
        }
    };
    useEffect(() => {
        fetchNotes();
    }, []);
    const addNote = async (note) => {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify(note),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        try {
            if (response.ok) {
                const newNote = await response.json();
                setNotes((prev) => [...prev, newNote]);
            }
        }
        catch (err) {
            throw new Error(`Could not add new note: ${err}`);
        }
    };
    const updateNote = async (id, note) => {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(note),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        try {
            if (response.ok) {
                const newNote = await response.json();
                setNotes((prev) => prev.map(prevNote => {
                    if (prevNote._id === id) {
                        return newNote;
                    }
                    else {
                        return prevNote;
                    }
                }));
            }
        }
        catch (err) {
            throw new Error(`Could not update note: ${err}`);
        }
    };
    const deleteNote = async (id) => {
        const response = await fetch(`${BASE_URL}/${id}`, {
            method: 'DELETE',
        });
        try {
            if (response.ok) {
                const deleteNote = await response.json();
                setNotes((prev) => prev.filter(note => note._id !== deleteNote._id));
            }
        }
        catch (err) {
            throw new Error(`Could not delete note: ${err}`);
        }
    };
    return (_jsx(NoteContext.Provider, { value: { notes, selectedNote, addNote, updateNote, deleteNote, selectNote }, children: children }));
};
export const useNotes = () => {
    const context = useContext(NoteContext);
    if (!context) {
        throw new Error('useNotes must be within a NotesProvider');
    }
    return context;
};
