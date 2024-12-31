// Importing mongoose to work with MongoDB
import mongoose from "mongoose";

// Define the schema for the 'BookCategory' collection
const BookCategorySchema = new mongoose.Schema({
    // 'categoryName' field stores the name of the category and must be unique
    categoryName: {
        type: String,
        unique: true  // Ensures that each category name is unique across the collection
    },

    // 'books' is an array of ObjectIds referencing the 'Book' model (Books that belong to this category)
    books: [{
        type: mongoose.Types.ObjectId,
        ref: "Book"  // References the 'Book' model to create a relationship between categories and books
    }]
},
{
    // 'timestamps' option automatically adds 'createdAt' and 'updatedAt' fields to the schema
    timestamps: true
})

// Export the 'BookCategory' model, which is based on the defined schema
export default mongoose.model("BookCategory", BookCategorySchema);
