// Importing mongoose to work with MongoDB
import mongoose from "mongoose";

// Define the schema for the 'User' collection
const UserSchema = new mongoose.Schema({
    // 'userType' stores the type of user (e.g., Student, Employee, Admin)
    userType: {
        type: String,
        required: true  // Ensures that the user type is provided
    },

    // 'userFullName' stores the full name of the user, must be unique
    userFullName: {
        type: String,
        required: true,  // Ensures that the user's full name is provided
        unique: true  // Ensures that the user's full name is unique in the collection
    },

    // 'admissionId' stores the unique ID for students (optional, for students only)
    admissionId: {
        type: String,
        min: 3,  // Minimum length of the admission ID
        max: 15,  // Maximum length of the admission ID
    },

    // 'employeeId' stores the unique ID for employees (optional, for employees only)
    employeeId: {
        type: String,
        min: 3,  // Minimum length of the employee ID
        max: 15,  // Maximum length of the employee ID
    },

    // 'age' stores the user's age (optional)
    age: {
        type: Number
    },

    // 'gender' stores the user's gender (optional)
    gender: {
        type: String
    },

    // 'dob' stores the user's date of birth (optional)
    dob: {
        type: String
    },

    // 'address' stores the user's address, default is an empty string
    address: {
        type: String,
        default: ""  // Optional field with an empty string as the default value
    },

    // 'mobileNumber' stores the user's mobile number, must be provided
    mobileNumber: {
        type: Number,
        required: true  // Ensures that the mobile number is provided
    },

    // 'photo' stores a URL or path to the user's photo, default is an empty string
    photo: {
        type: String,
        default: ""  // Optional field with an empty string as the default value
    },

    // 'email' stores the user's email address, must be unique and provided
    email: {
        type: String,
        required: true,  // Ensures that the email is provided
        max: 50,  // Maximum length of the email
        unique: true  // Ensures that the email is unique across the collection
    },

    // 'password' stores the user's password (hashed), must be at least 6 characters long
    password: {
        type: String,
        required: true,  // Ensures that the password is provided
        min: 6  // Minimum length of the password
    },

    // 'points' stores the user's points (e.g., for rewards), default is 0
    points: {
        type: Number,
        default: 0  // Default points value is 0
    },

    // 'activeTransactions' stores an array of ObjectIds referencing active book transactions
    activeTransactions: [{
        type: mongoose.Types.ObjectId,
        ref: "BookTransaction"  // References the 'BookTransaction' model
    }],

    // 'prevTransactions' stores an array of ObjectIds referencing previous book transactions
    prevTransactions: [{
        type: mongoose.Types.ObjectId,
        ref: "BookTransaction"  // References the 'BookTransaction' model
    }],

    // 'isAdmin' specifies if the user is an administrator, default is false
    isAdmin: {
        type: Boolean,
        default: false  // Default value is false, meaning the user is not an admin by default
    }
},
{
    // 'timestamps' option automatically adds 'createdAt' and 'updatedAt' fields to the schema
    timestamps: true
})

// Export the 'User' model, which is based on the defined schema
export default mongoose.model("User", UserSchema);
