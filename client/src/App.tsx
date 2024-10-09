import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Dashboard } from './dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-full'>
      <Dashboard />
    </div>
  )
}

export default App
