import { jsx as _jsx } from "react/jsx-runtime";
import { Dashboard } from './dashboard';
import { NoteProvider } from './contexts/note-context';
function App() {
    return (_jsx("div", { className: 'w-full h-full', children: _jsx(NoteProvider, { children: _jsx(Dashboard, {}) }) }));
}
export default App;
