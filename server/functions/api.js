import "dotenv/config";
import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import connectDB from "../configs/mongobd.js";
import userRouter from "../routes/userRoutes.js";

// App Configuration
const app = express();

// Initialize Middleware
app.use(express.json());
app.use(cors());

// Connect to database
let isConnected = false;

const connectToDatabase = async () => {
  if (!isConnected) {
    try {
      await connectDB();
      isConnected = true;
    } catch (error) {
      console.error("Database connection failed:", error);
    }
  }
};

// Middleware to ensure database connection for all routes
app.use(async (req, res, next) => {
  await connectToDatabase();
  next();
});

// API routes
app.get("/", (req, res) => res.send("Api is running!"));
app.use("/api/user", userRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Something went wrong!" });
});

export const handler = serverless(app);
