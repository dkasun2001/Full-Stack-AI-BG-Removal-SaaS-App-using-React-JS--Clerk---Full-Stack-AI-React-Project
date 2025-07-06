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
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*", // Add your frontend URL in production
    credentials: true,
  })
);

// API routes
app.get("/", (req, res) => res.send("Api is running!"));

// Health check endpoint for DigitalOcean
app.get("/health", (req, res) => res.status(200).json({ status: "OK" }));

app.listen(PORT, "0.0.0.0", () =>
  console.log("server is running on port " + PORT)
);
