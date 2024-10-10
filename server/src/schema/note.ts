import mongoose from 'mongoose';

interface NoteType {
  title: string,
  content: string,
  date: Date
}

const noteSchema = new mongoose.Schema<NoteType>({
  title: { type: String, required: true },
  content: { type: String, required: true},
  date: { type: Date, required: true}
});

// Defining database and giving a name to the table
const NoteModel = mongoose.model<NoteType>(
  'Notes',
  noteSchema
);

export default NoteModel;