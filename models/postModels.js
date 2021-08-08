import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  movies: {
    type: String,
    required: true,
  },
  image: { type: String, required: true },
  date: {type: String}
});

const PostModel = mongoose.model("movies", PostSchema);

export default PostModel;
