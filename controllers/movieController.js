import mongoose from "mongoose";
import PostModel from "../models/postModels.js";

export const createMovies = async (req, res) => {
  const movies = new PostModel({
    movies: req.body.movies,
    image: req.body.image,
    date:req.body.date
  });

  const created = await movies.save();
  res.status(201).json(movies);
};

export const deleteMovies = async (req, res) => {
  const id = await PostModel.findById(req.params.id);

  if (id) {
    await id.remove();
    res.json({ message: "Movie deleted " });
  } else {
    res.status(404);
    throw new Error("Movie not found");
  }
};
