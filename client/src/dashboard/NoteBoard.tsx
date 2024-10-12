import { useNotes } from "../contexts/note-context"

export const NoteBoard = (): React.ReactElement => {
  const { notes, selectNote, selectedNote, deleteNote } = useNotes();

  const handleSelectNote = (id: string) => {
    selectNote(id)
  }

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    deleteNote(id)
  }

  console.log(selectedNote)
  
  return (
    <div className="grid grid-cols-3 gap-4 auto-rows-max overflow-y-auto">
      {notes.map((note, i) => (
        <div
          id={i.toString()}
          className="border-[#85826e] border-2 px-4 py-2 h-72 min-w-60 rounded-xl cursor-pointer bg-[#d6c9a3]"
          onClick={(e) => handleSelectNote(note?._id ?? "")}
        >
          <div className="flex justify-end h-6">
            <button onClick={(e) => handleDelete(note?._id ? note._id : '', e)}>x</button>
          </div>
          <div className="flex flex-col gap-4 h-full pb-6"> 
            <div className="w-full text-center">
              <h1 className="font-bold text-xl">
                {note.title}
              </h1>
            </div>
            <div className="break-words overflow-y-auto h-full whitespace-pre-wrap">
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