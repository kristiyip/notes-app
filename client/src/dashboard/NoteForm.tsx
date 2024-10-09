import { useState } from 'react';

export const NoteForm = (): React.ReactElement => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  return (
    <div className="w-96 border-black border-2 border-solid h-44">
      <form>
        <div>
          <label>Title</label>
          <input
            value={title}
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
          /> 
        </div>
      </form>
    </div>
  )
}