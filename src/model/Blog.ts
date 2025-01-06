import mongoose, { Schema, model, models } from "mongoose";

export interface Blogs {
  _id?: mongoose.Types.ObjectId;
  title: string;
  slug: string;  
  image: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
  category: string; 
  likes: number;
  comments:string[];
}

const blogSchema = new Schema<Blogs>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String,required: true}, 
    category: { type: String ,required: true},
    likes: { type: Number },
    comments: { type: [String] , default: [] },
  },
  { timestamps: true }
);

const Blogs = models?.Blogs || model<Blogs>("Blogs", blogSchema);

export default Blogs;
