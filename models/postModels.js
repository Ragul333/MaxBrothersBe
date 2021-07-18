import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  movies: {
    type: String,
    required: true,
  },
  image: { type: Array, required: true },
});

const PostModel = mongoose.model("movies", PostSchema);

export default PostModel;
