import express from "express";
import { createMovies } from "../controllers/movieController.js";
import { getMovies, getMovie } from "../controllers/posts.js";
import {
  createProjects,
  getProjects,
} from "../controllers/projectControllers.js";

const router = express.Router();

router.route("/").get(getMovies);
router.route("/:id").get(getMovie);
router.route("/post").post(createMovies);
router.route("/postproject").post(createProjects);
router.route("/postproject/projects").get(getProjects);
/* router.get("/:id", getPost);
router.delete("/post/:id", deletePost); */

export default router;
