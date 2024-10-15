export interface NoteType {
    _id?: string;
    title: string;
    content: string;
    createdAt?: Date;
    updatedAt?: Date;
}
interface NoteContextType {
    notes: NoteType[];
    selectedNote: NoteType | null;
    addNote: (note: NoteType) => void;
    updateNote: (id: string, note: NoteType) => void;
    deleteNote: (id: string) => void;
    selectNote: (id: string) => void;
}
export declare const NoteContext: import("react").Context<NoteContextType | null>;
export declare const NoteProvider: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useNotes: () => NoteContextType;
export {};
