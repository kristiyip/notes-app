import { useEffect, useState } from 'react';
import { useNotes } from '../contexts/note-context';

export const NoteForm = (): React.ReactElement => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const { selectedNote, addNote, selectNote, updateNote } = useNotes();

  useEffect(() => {
    if(selectedNote) {
      setTitle(selectedNote.title)
      setContent(selectedNote.content)
    } else {
      setTitle('')
      setContent('')
    }
  }, [selectedNote])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newNote = {
      title: title,
      content: content,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    addNote(newNote)
    setTitle('');
    setContent('');
  }

  const handleUpdate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newNote = {
      title: title,
      content: content,
      updatedNote: new Date()
    }

    if(selectedNote?._id) {
      updateNote(selectedNote._id, newNote)
    }

    setTitle('');
    setContent('');
    selectNote('');
  }

  const handleCancelUpdate = () => {
    setTitle('');
    setContent('');
    selectNote('');
  }

  return (
    <div className='w-96 border-[#d4a373] border-2 border-solid p-8 mr-8 h-auto max-h-full rounded-xl bg-[#fefae0]'>
      <form className="flex flex-col gap-4" onSubmit={!selectedNote ? handleSubmit : handleUpdate}>
        <div className='flex flex-col'>
          <label className='font-bold'>Title</label>
          <input
            className='border-[#d4a373] focus:outline-none focus:ring focus:ring-[#bc6c25] border rounded-full px-2 py-1 bg-[#faedcd]'
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label className='font-bold'>Content</label>
          <textarea
            className='overflow-y-auto border-[#d4a373] focus:outline-none focus:ring focus:ring-[#bc6c25] border rounded-lg min-h-44 max-h-[32rem] p-2 bg-[#faedcd]'
            value={content}
            required
            onChange={(e) => setContent(e.target.value)}
          /> 
        </div>
          {
            !selectedNote ? (
              <div className='flex justify-end'>
                <button 
                  className='border-[#d4a373] text-white border px-8 py-1 rounded-full bg-[#5e674a] hover:bg-[#445128] active:bg-[#283618]'
                  type='submit'
                >
                  Add
                </button>
              </div>
            ) : (
              <div className='flex justify-between'>
                <button 
                  className='text-white px-8 py-1 rounded-full bg-[#dda15e] hover:bg-[#dc8f42] active:bg-[#db7c26]'
                  type="button"
                  onClick={() => handleCancelUpdate()}
                >
                  Cancel
                </button>
                <button 
                  className='text-white px-8 py-1 rounded-full bg-[#5e674a] hover:bg-[#445128] active:bg-[#283618]'
                  type='submit'
                >
                  Update
                </button>
              </div>
            )
          }
      </form>
    </div>
  )
}