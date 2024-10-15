import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNotes } from '../contexts/note-context';
import CloseIcon from '@mui/icons-material/Close';
export const NoteBoard = () => {
    const { notes, selectNote, deleteNote } = useNotes();
    const handleSelectNote = (id) => {
        selectNote(id);
    };
    const handleDelete = (id, e) => {
        e.stopPropagation();
        deleteNote(id);
        selectNote('');
    };
    return (_jsx("div", { className: 'grid lg:grid-cols-3 md:grid-cols-1 gap-4 w-full auto-rows-max overflow-y-auto', children: notes.map((note, i) => (_jsxs("div", { id: i.toString(), className: 'border-[#d4a373] border-2 py-2 h-72 min-w-40 rounded-xl cursor-pointer bg-[#fefae0]', onClick: () => handleSelectNote(note?._id ?? ""), children: [_jsx("div", { className: 'flex justify-end h-6 px-2', children: _jsx(CloseIcon, { sx: { fontSize: 15 }, onClick: (e) => handleDelete(note?._id ? note._id : '', e) }) }), _jsxs("div", { className: 'flex flex-col gap-4 h-full pb-6 px-6', children: [_jsx("div", { className: 'w-full text-center', children: _jsx("h1", { className: 'font-bold text-xl', children: note.title }) }), _jsx("div", { className: 'break-words overflow-y-auto h-full whitespace-pre-wrap', children: note.content }), _jsx("div", { className: 'text-end text-sm', children: note?.updatedAt ? new Date(note.updatedAt).toLocaleDateString() : '' })] })] }))) }));
};
