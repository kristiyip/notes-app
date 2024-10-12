import { NoteForm } from './NoteForm'
import { NoteBoard } from './NoteBoard'


export const Dashboard = (): React.ReactElement => {
  return (
    <div 
      className='w-full flex flex-row p-8 h-screen bg-custom-image bg-custom-size bg-custom-position bg-[#dbd9c1]'
    >
      <div className='h-full flex flex-col justify-center align-bottom'>
        <NoteForm />
      </div>
      <NoteBoard />
    </div>
  )
}