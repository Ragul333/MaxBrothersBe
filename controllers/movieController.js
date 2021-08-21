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

export const multipleFileUpload = async (req, res, next) => {
  try{
      let filesArray = [];
      req.files.forEach(element => {
          const file = {
              fileName: element.originalname,
              filePath: element.path,
              fileType: element.mimetype,
              fileSize: fileSizeFormatter(element.size, 2)
          }
          filesArray.push(file);
      });
      const multipleFiles = new multiplefile({
          title: req.body.title,
          files: filesArray 
      });
      await multipleFiles.save();
      res.status(201).send('Files Uploaded Successfully');
  }catch(error) {
      res.status(400).send(error.message);
  }
}

const fileSizeFormatter = (bytes, decimal) => {
  if(bytes === 0){
      return '0 Bytes';
  }
  const dm = decimal || 2;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];

}