import { useEffect, useState } from 'react';
import { useNotes } from '../contexts/note-context';

export const NoteForm = (): React.ReactElement => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { selectedNote, addNote, selectNote } = useNotes();

  useEffect(() => {
    if(selectedNote) {
      setTitle(selectedNote.title)
      setContent(selectedNote.content)
      selectNote("")
    }
  }, [selectedNote])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newNote = {
      title: title,
      content: content,
      date: new Date().toDateString()
    }

    addNote(newNote)
    setTitle('');
    setContent('');
  }

  return (
    <div className='w-96 border-black border-2 border-solid p-8 mr-8 h-auto rounded-xl'>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <label className='font-bold'>Title</label>
          <input
            className='border-black border rounded-full px-2 py-1'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label className='font-bold'>Content</label>
          <textarea
            className='overflow-y-auto border-black border rounded-xl h-44 p-2'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          /> 
        </div>
        <div className='flex justify-end'>
          <button 
            className='border-black border px-8 py-1 rounded-full'
            type='submit'
          >
            Add
          </button>
        </div>
      </form>
    </div>
  )
}