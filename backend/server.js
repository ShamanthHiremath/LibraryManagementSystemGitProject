// Import required dependencies for the application
import cors from "cors"; // Middleware for handling CORS (Cross-Origin Resource Sharing)
import dotenv from "dotenv"; // To load environment variables from .env file
import express from "express"; // Express framework for handling HTTP requests
import mongoose from "mongoose"; // MongoDB object modeling
import authRoutes from "./routes/auth.js"; // Authentication routes
import bookRoutes from "./routes/books.js"; // Book-related routes
import categoryRoutes from "./routes/categories.js"; // Category-related routes
import transactionRoutes from "./routes/transactions.js"; // Transaction-related routes
import userRoutes from "./routes/users.js"; // User-related routes

/* App Configuration */
dotenv.config();  // Load environment variables from .env file
const app = express();  // Initialize Express application
const port = process.env.PORT || 4000;  // Set port for the server, default to 4000

/* Middlewares */
app.use(express.json());  // Middleware to parse JSON data in incoming requests
app.use(cors());  // Enable CORS to allow requests from different origins

/* API Routes */
app.use("/api/auth", authRoutes);  // Authentication routes
app.use("/api/users", userRoutes);  // User routes
app.use("/api/books", bookRoutes);  // Book routes
app.use("/api/transactions", transactionRoutes);  // Transaction routes
app.use("/api/categories", categoryRoutes);  // Category routes

/* MongoDB Connection */
mongoose.connect(
  process.env.MONGO_URL,  // Database URL from environment variables
  {
    useCreateIndex: true,  // Use new MongoDB index creation method
    useNewUrlParser: true,  // Use the new MongoDB URL parser
    useUnifiedTopology: true,  // Use the new unified topology for MongoDB
  },
  () => {
    console.log("MONGODB CONNECTED");  // Log message on successful connection to MongoDB
  }
);

/* Home Route */
app.get("/", (req, res) => {
  res.status(200).send("Welcome to LibraryApp");  // Basic welcome message to verify app is running
});

/* Port Listening */
app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);  // Log the server start message with the listening port
});
