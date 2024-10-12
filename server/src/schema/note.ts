import mongoose from 'mongoose';

interface NoteType {
  title: string,
  content: string,
  createdAt: Date,
  updatedAt: Date
}

const noteSchema = new mongoose.Schema<NoteType>({
  title: { type: String, required: true },
  content: { type: String, required: true},
  createdAt: { type: Date, required: true},
  updatedAt: { type: Date, required: true}
}, { timestamps: true });

// Defining database and giving a name to the table
const NoteModel = mongoose.model<NoteType>(
  'Notes',
  noteSchema
);

export default NoteModel;