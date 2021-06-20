import mongoose from "mongoose";

const ProjectSchema = mongoose.Schema({
  projects: {
    type: String,
    required: true,
  },
  image: { type: String, required: true },
});

const ProjectModel = mongoose.model("projects", ProjectSchema);

export default ProjectModel;
