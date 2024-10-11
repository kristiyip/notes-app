import { useNotes } from "../contexts/note-context"

export const NoteBoard = (): React.ReactElement => {
  const { notes, selectNote, selectedNote } = useNotes();

  const handleSelectNote = (id: string) => {
    selectNote(id)
  }

  return (
    <div className="grid grid-cols-3 gap-4 auto-rows-max overflow-y-auto">
      {notes.map((note, i) => (
        <div 
          className="border-black border-2 px-4 py-2 h-72 min-w-60 rounded-xl cursor-pointer"
          onClick={() => handleSelectNote(note?._id ?? "")}
        >
          <div className="flex justify-end h-6">
            <button>x</button>
          </div>
          <div className="flex flex-col gap-4 h-full pb-6"> 
            <div className="w-full text-center">
              <h1 className="font-bold text-xl">
                {note.title}
              </h1>
            </div>
            <div className="break-words overflow-y-auto h-full">
              {note.content}
            </div>
            <div className="text-end">
              {new Date(note.date).toLocaleDateString()}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}