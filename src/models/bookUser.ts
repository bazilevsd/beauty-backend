import mongoose from "mongoose";
const bookSchema = new mongoose.Schema({
  fullName: { type: String },
  email: { type: String },
  message: { type: String },
});

const Book = mongoose.model("BookUser", bookSchema);

export default Book;
