import express, { Request, Response } from 'express';
import NoteModel from '../schema/note';

const router = express.Router();

//@ts-ignore
// Route for getting all notes in db
router.get('/getAllNotes', async (req: Request, res: Response) => {
  try {
    const notes = await NoteModel.find({})

    if(notes.length === 0) {
      return res.status(404).send("No notes found.")
    }
    res.status(200).send(notes)
  } catch(err) {
    res.status(500).send(err);
  }
});

// Route for adding a new note to db
router.post('/', async (req: Request, res: Response) => {
  try {
    const newNoteBody = req.body
    const newNote = new NoteModel(newNoteBody)
    const savedNote = await newNote.save()

    res.status(200).send(savedNote)
  } catch (err) {
    res.status(500).send(err);
  }
})

//@ts-ignore
// Route for updating a note in db
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const newNoteBody = req.body;
    const note = await NoteModel.findByIdAndUpdate(
      id,
      newNoteBody,
      { new: true }
    );

    if(!note) return res.status(404).send();

    res.status(200).send(note)
  } catch (err) {
    res.status(500).send(err);
  }
})

export default router;