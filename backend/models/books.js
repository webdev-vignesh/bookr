const mongoose = require("mongoose");

const BooksSchema = new mongoose.Schema({
    bookId: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    genre: {
        type: [{ type: String }],
        required: true,
    },
    avgRating: {
        type: mongoose.Types.Decimal128,
        required: true,
    },
    aboutAuthor: {
        type: String,
        required: true,
    },
    authorImgUrl: {
        type: String,
        required: true,
    },
    bookImgUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
})

const BooksModel = mongoose.model("Books", BooksSchema);
module.exports = {BooksModel}