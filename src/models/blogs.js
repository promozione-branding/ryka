import mongoose from "mongoose"

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 200 },
    permalink: { type: String, required: true, unique: true, trim: true, lowercase: true },
    date: { type: Date, required: true, default: Date.now, index: true },
    metaTitle: { type: String, trim: true, maxlength: 70, default: "" },
    metaDescription: { type: String, trim: true, maxlength: 200, default: "" },
    content: { type: String, default: "" },
    image: { type: String, required: true },       // public URL (R2)
    imageFileId: { type: String, required: true }, // R2 object key, used for cleanup
  },
  { timestamps: true }
)

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema)