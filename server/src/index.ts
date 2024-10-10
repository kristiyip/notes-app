import express, { Express } from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import notes from './routes/notes'

const app: Express = express();
const port = process.env.PORT || 3001

dotenv.config()

app.use(express.json());

const mongoURI: string = process.env.MONGOURI || ""

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.error("Failed to connect to MongoDB: ", err))

app.use("/notes", notes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
