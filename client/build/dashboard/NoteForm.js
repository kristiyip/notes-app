import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useNotes } from '../contexts/note-context';
export const NoteForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { selectedNote, addNote, selectNote, updateNote } = useNotes();
    useEffect(() => {
        if (selectedNote) {
            setTitle(selectedNote.title);
            setContent(selectedNote.content);
        }
        else {
            setTitle('');
            setContent('');
        }
    }, [selectedNote]);
    const handleSubmit = (event) => {
        event.preventDefault();
        const newNote = {
            title: title,
            content: content,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        addNote(newNote);
        setTitle('');
        setContent('');
    };
    const handleUpdate = (event) => {
        event.preventDefault();
        const newNote = {
            title: title,
            content: content,
            updatedNote: new Date()
        };
        if (selectedNote?._id) {
            updateNote(selectedNote._id, newNote);
        }
        setTitle('');
        setContent('');
        selectNote('');
    };
    const handleCancelUpdate = () => {
        setTitle('');
        setContent('');
        selectNote('');
    };
    return (_jsx("div", { className: 'w-96 border-[#d4a373] border-2 border-solid p-8 mr-8 h-auto max-h-full rounded-xl bg-[#fefae0]', children: _jsxs("form", { className: "flex flex-col gap-4", onSubmit: !selectedNote ? handleSubmit : handleUpdate, children: [_jsxs("div", { className: 'flex flex-col', children: [_jsx("label", { className: 'font-bold', children: "Title" }), _jsx("input", { className: 'border-[#d4a373] focus:outline-none focus:ring focus:ring-[#bc6c25] border rounded-full px-2 py-1 bg-[#faedcd]', value: title, required: true, onChange: (e) => setTitle(e.target.value) })] }), _jsxs("div", { className: 'flex flex-col', children: [_jsx("label", { className: 'font-bold', children: "Content" }), _jsx("textarea", { className: 'overflow-y-auto border-[#d4a373] focus:outline-none focus:ring focus:ring-[#bc6c25] border rounded-lg min-h-44 max-h-[32rem] p-2 bg-[#faedcd]', value: content, required: true, onChange: (e) => setContent(e.target.value) })] }), !selectedNote ? (_jsx("div", { className: 'flex justify-end', children: _jsx("button", { className: 'border-[#d4a373] text-white border px-8 py-1 rounded-full bg-[#5e674a] hover:bg-[#445128] active:bg-[#283618]', type: 'submit', children: "Add" }) })) : (_jsxs("div", { className: 'flex justify-between', children: [_jsx("button", { className: 'text-white px-8 py-1 rounded-full bg-[#dda15e] hover:bg-[#dc8f42] active:bg-[#db7c26]', type: "button", onClick: () => handleCancelUpdate(), children: "Cancel" }), _jsx("button", { className: 'text-white px-8 py-1 rounded-full bg-[#5e674a] hover:bg-[#445128] active:bg-[#283618]', type: 'submit', children: "Update" })] }))] }) }));
};
