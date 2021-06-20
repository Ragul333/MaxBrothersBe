import express from "express";
import { createMovies } from "../controllers/movieController.js";
import { getMovies, getMovie } from "../controllers/posts.js";

const router = express.Router();

router.route("/").get(getMovies);
router.route("/:id").get(getMovie);
router.route("/post").post(createMovies);
/* router.get("/:id", getPost);
router.delete("/post/:id", deletePost); */

export default router;
