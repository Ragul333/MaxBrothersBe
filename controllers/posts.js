import PostModel from "../models/postModels.js";

// Fetch all Movies
// GET /
// access by everyone
export const getMovies = async (req, res) => {
  try {
    const movies = (await PostModel.find({}, null, {sort: {'_id':-1}, function (err,movies){
      if(err)
      res.send(err);
  res.json(movies);
    }}));
    res.json(movies);
  } catch (error) {
    res.status(404).json({ message: "Movies not Found" });
  }
};

// Fetch one Movie
// GET /:id
// access by everyone
export const getMovie = async (req, res) => {
  const id = req.params.id;
  const movie = await PostModel.findById(id);

  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ message: "Movie not Found" });
  }
};

// Fetch one Movie
// GET /:id
// access by everyone

/* export const createPost = async (req, res) => {
  const post = req.body;

  const data = new PostModel(post);

  try {
    await data.save();
    res.status(201).json(data);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const deletePost = async (req, res) => {
  const id = req.params.id;

  try {
    await PostModel.findByIdAndRemove(id);
    res.status(200).json({ message: "POST Deleted" });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
 */
