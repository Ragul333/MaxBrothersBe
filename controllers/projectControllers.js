import ProjectModel from "../models/projectModels.js";

export const createProjects = async (req, res) => {
  const projects = new ProjectModel({
    projects: req.body.projects,
    image: req.body.image,
  });

  const created = await projects.save();
  res.status(201).json(projects);
};
