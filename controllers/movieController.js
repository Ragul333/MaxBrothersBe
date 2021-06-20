import PostModel from "../models/postModels.js";

export const createMovies = async (req, res) => {
  const movies = new PostModel({
    movies: req.body.movies,
    image: req.body.image,
  });

  const created = await movies.save();
  res.status(201).json(movies);
};
