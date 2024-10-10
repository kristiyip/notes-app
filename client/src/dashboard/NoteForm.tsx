import { useState } from 'react';

export const NoteForm = (): React.ReactElement => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newNote = {
      title: title,
      content: content,
      date: new Date()
    }

    setTitle('');
    setContent('');
  }

  return (
    <div className='w-96 border-black border-2 border-solid p-8'>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          /> 
        </div>
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}