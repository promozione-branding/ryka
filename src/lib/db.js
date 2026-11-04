import mongoose from "mongoose"

export default async function db() {
  if (mongoose.connection.readyState === 1) return

  try {
    await mongoose.connect(process.env.MONGODB_URI)
  } catch (error) {
    console.error("MongoDB connection failed:", error.message)
    throw error
  }
}