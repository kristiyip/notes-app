import { NoteForm } from './NoteForm/NoteForm'
import { NoteBoard } from './NoteBoard/NoteBoard'


export const Dashboard = (): React.ReactElement => {
  return (
    <div className='w-full flex flex-row p-8 h-screen bg-custom-image bg-custom-size bg-custom-position bg-[#e9edc9]'>
      <div className='h-full flex flex-col justify-center align-bottom'>
        <NoteForm />
      </div>
      <NoteBoard />
    </div>
  )
}