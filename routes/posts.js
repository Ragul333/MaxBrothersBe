import express from "express";
import { createMovies, deleteMovies } from "../controllers/movieController.js";
import { getMovies, getMovie } from "../controllers/posts.js";
import {
  createProjects,
  deleteProject,
  getProjects,
} from "../controllers/projectControllers.js";

const router = express.Router();

router.route("/").get(getMovies);
router.route("/:id").get(getMovie);
router.route("/post").post(createMovies);
router.route("/:id").delete(deleteMovies);
router.route("/postproject").post(createProjects);
router.route("/postproject/projects").get(getProjects);
router.route("/postproject/projects/:id").delete(deleteProject);
/* router.get("/:id", getPost);
router.delete("/post/:id", deletePost);  */

export default router;
