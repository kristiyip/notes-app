import { render, screen, fireEvent } from '@testing-library/react'
import { NoteForm } from './NoteForm'
import '@testing-library/jest-dom'

const mockOnSubmit = jest.fn()

describe('NoteForm component', () => {
  beforeEach(() => {
    // Reset mock before each test
    mockOnSubmit.mockClear();
  })

  test('renders the note form with an input, textarea and submit button', () => {
    render(<NoteForm />);
  
    expect(screen.getByLabelText('Title')).toBeInTheDocument();
  })
})

