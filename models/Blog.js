import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
  image: { type: String, required: true }, // Path to the blog image
  date: { type: String, required: true },  // Storing as a string (format: "Jan 30, 2025")
  title: { type: String, required: true }, // Blog title
  description: { type: String, required: true }, // Short summary
  content: { type: String, required: true }, // Full blog content
}, { timestamps: true }); // Adds createdAt and updatedAt fields

const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

export default Blog;
