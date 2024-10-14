import express, { Express } from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import cors from 'cors';
import notes from './routes/notes'

const app: Express = express();
const port = process.env.PORT || 3001

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

app.use(express.json());
app.use(cors());
const mongoURI: string = process.env.MONGODB_URI || ""

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.error("Failed to connect to MongoDB: ", err))

app.use("/api/notes", notes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
