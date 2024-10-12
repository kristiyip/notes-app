import { Dashboard } from './dashboard'
import { NoteProvider } from './contexts/note-context'

function App() {
  return (
    <div className='w-full h-full'>
      <NoteProvider>
        <Dashboard />
      </NoteProvider>
    </div>
  )
}

export default App
