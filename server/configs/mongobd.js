import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("MongoDB already connected");
    return;
  }

  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");
  });

  mongoose.connection.on("error", (err) => {
    console.log("MongoDB connection error:", err);
  });

  await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`);
};

export default connectDB;
