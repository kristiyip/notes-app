import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NoteForm } from './NoteForm';
import { NoteBoard } from './NoteBoard';
export const Dashboard = () => {
    return (_jsxs("div", { className: 'w-full flex flex-row p-8 h-screen bg-custom-image bg-custom-size bg-custom-position bg-[#e9edc9]', children: [_jsx("div", { className: 'h-full flex flex-col justify-center align-bottom', children: _jsx(NoteForm, {}) }), _jsx(NoteBoard, {})] }));
};
