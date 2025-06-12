import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/mongobd.js";

// App Configuration

const PORT = process.env.PORT || 4000;
const app = express();

// Database Configuration
await connectDB();

// Initialize Middleware
app.use(express.json());
app.use(cors());

// API routes

app.get("/", (req, res) => res.send("Api is running!"));

app.listen(PORT, () => console.log("server is running on port " + PORT));
