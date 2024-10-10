import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Dashboard } from './dashboard'
import { NoteProvider } from './contexts/note-context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-full'>
      <NoteProvider>
        <Dashboard />
      </NoteProvider>
    </div>
  )
}

export default App
