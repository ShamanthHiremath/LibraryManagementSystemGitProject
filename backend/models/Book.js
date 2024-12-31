// Importing mongoose to work with MongoDB
import mongoose from "mongoose";

// Define the schema for the 'Book' collection
const BookSchema = new mongoose.Schema({
    // 'bookName' field is a required string that stores the book's title
    bookName: {
        type: String,
        required: true  // Ensures the book name is provided
    },
    
    // 'alternateTitle' field stores an alternate title for the book, default is an empty string
    alternateTitle: {
        type: String,
        default: ""  // Optional field with an empty string as the default value
    },

    // 'author' field is a required string for the book's author name
    author: {
        type: String,
        required: true  // Ensures the author's name is provided
    },

    // 'language' field stores the language of the book, default is an empty string
    language: {
        type: String,
        default: ""  // Optional field with an empty string as the default value
    },

    // 'publisher' field stores the publisher's name, default is an empty string
    publisher: {
        type: String,
        default: ""  // Optional field with an empty string as the default value
    },

    // 'bookCountAvailable' stores the number of copies available, must be a number
    bookCountAvailable: {
        type: Number,
        required: true  // Ensures the available book count is provided
    },

    // 'bookStatus' field stores the status of the book (e.g., 'Available', 'Checked Out'), default is 'Available'
    bookStatus: {
        type: String,
        default: "Available"  // Default status is 'Available'
    },

    // 'categories' is an array of ObjectIds referencing the 'BookCategory' model (Book categories for the book)
    categories: [{
        type: mongoose.Types.ObjectId,
        ref: "BookCategory"  // References the 'BookCategory' model
    }],

    // 'transactions' is an array of ObjectIds referencing the 'BookTransaction' model (Related transactions for the book)
    transactions: [{
        type: mongoose.Types.ObjectId,
        ref: "BookTransaction"  // References the 'BookTransaction' model
    }]
},
{
    // 'timestamps' option automatically adds 'createdAt' and 'updatedAt' fields to the schema
    timestamps: true
})

// Export the 'Book' model, which is based on the defined schema
export default mongoose.model("Book", BookSchema);
