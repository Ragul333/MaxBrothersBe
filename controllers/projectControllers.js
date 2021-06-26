import ProjectModel from "../models/projectModels.js";

export const createProjects = async (req, res) => {
  const projects = new ProjectModel({
    projects: req.body.projects,
    image: req.body.image,
  });

  const created = await projects.save();
  res.status(201).json(projects);
};

export const getProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.find({});

    res.json(projects);
  } catch (error) {
    res.status(404).json({ message: "Project not Found" });
  }
};

export const deleteProject = async (req, res) => {
  const id = await ProjectModel.findById(req.params.id);

  if (id) {
    await id.remove();
    res.json({ message: "Project deleted " });
  } else {
    res.status(404);
    throw new Error("Project not found");
  }
};
