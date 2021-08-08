import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  movies: {
    type: String,
    required: true,
  },
  image: { type: Array, required: true },
  date: {type: String,default: 'UPCOMING'}
});

const PostModel = mongoose.model("movies", PostSchema);

export default PostModel;
