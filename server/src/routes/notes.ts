import express, { Request, Response } from 'express';
import NoteModel from '../schema/note';

const router = express.Router();

//@ts-ignore
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

export default router;