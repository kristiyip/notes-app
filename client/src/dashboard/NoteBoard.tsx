import { useNotes } from '../contexts/note-context'
import CloseIcon from '@mui/icons-material/Close'

export const NoteBoard = (): React.ReactElement => {
  const { notes, selectNote, selectedNote, deleteNote } = useNotes();

  const handleSelectNote = (id: string) => {
    selectNote(id)
  }

  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    deleteNote(id)
    selectNote('')
  }
  
  return (
    <div className='grid grid-cols-3 gap-4 w-full auto-rows-max overflow-y-auto'>
      {notes.map((note, i) => (
        <div
          id={i.toString()}
          className='border-[#d4a373] border-2 py-2 h-72 min-w-60 rounded-xl cursor-pointer bg-[#fefae0]'
          onClick={(e) => handleSelectNote(note?._id ?? "")}
        >
          <div className='flex justify-end h-6 px-2'>
            <CloseIcon sx={{ fontSize: 15 }} onClick={(e) => handleDelete(note?._id ? note._id : '', e)} />
          </div>
          <div className='flex flex-col gap-4 h-full pb-6 px-6'> 
            <div className='w-full text-center'>
              <h1 className='font-bold text-xl'>
                {note.title}
              </h1>
            </div>
            <div className='break-words overflow-y-auto h-full whitespace-pre-wrap'>
              {note.content}
            </div>
            <div className='text-end text-sm'>
              {note?.updatedAt ? new Date(note.updatedAt).toLocaleDateString() : ''}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}