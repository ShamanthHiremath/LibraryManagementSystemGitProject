// Importing mongoose to work with MongoDB
import mongoose from "mongoose";

// Define the schema for the 'BookTransaction' collection
const BookTransactionSchema = new mongoose.Schema({
    // 'bookId' field stores the ID of the book involved in the transaction
    bookId: {
        type: String,
        required: true  // Ensures that the book ID is provided for every transaction
    },

    // 'borrowerId' stores the ID of the borrower, can be an EmployeeId or AdmissionId
    borrowerId: { 
        type: String,
        required: true  // Ensures that the borrower ID is provided
    },

    // 'bookName' stores the name of the book involved in the transaction
    bookName: {
        type: String,
        required: true  // Ensures that the book name is provided
    },

    // 'borrowerName' stores the name of the person borrowing the book
    borrowerName: {
        type: String,
        required: true  // Ensures that the borrower's name is provided
    },

    // 'transactionType' specifies whether the transaction is an 'Issue' or 'Reservation'
    transactionType: { 
        type: String,
        required: true,  // Ensures that the transaction type is provided
    },

    // 'fromDate' stores the start date of the transaction (e.g., when the book was issued or reserved)
    fromDate: {
        type: String,
        required: true,  // Ensures that the from date is provided
    },

    // 'toDate' stores the end date of the transaction (e.g., the return due date or reservation expiry)
    toDate: {
        type: String,
        required: true,  // Ensures that the to date is provided
    },

    // 'returnDate' stores the actual return date of the book (if applicable)
    returnDate: {
        type: String  // Optional field, can be left blank if the book hasn't been returned yet
    },

    // 'transactionStatus' stores the current status of the transaction, default is 'Active'
    transactionStatus: {
        type: String,
        default: "Active"  // Default status is 'Active', meaning the transaction is still ongoing
    }
},
{
    // 'timestamps' option automatically adds 'createdAt' and 'updatedAt' fields to the schema
    timestamps: true
})

// Export the 'BookTransaction' model, which is based on the defined schema
export default mongoose.model("BookTransaction", BookTransactionSchema);
