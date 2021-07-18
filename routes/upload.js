import express from "express";
const router = express.Router();
import cloudinary from "cloudinary";
import fs from 'fs'


cloudinary.config({
  cloud_name: 'drpwuzvax',
  api_key: '639564898932956',
  api_secret: 'ErJ8fJbn3WY2nanTo8nrLFJoFes',
});

router.post("/image", (req, res) => {
  try {
    if(!req.files || Object.keys(req.files).length === 0){
      removeTmp(file.tempFilePath)
      return res.status(400).json({message:'No files'})
    }
    
    const file = req.files.file;
    
    if(file.size>1024*1024){
      removeTmp(file.tempFilePath)
      return res.status(400).json({message:'Large file'})
    } 
    
    if(file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png'){
      removeTmp(file.tempFilePath)
       return res.status(400).json({message:'Informat file'}) 
    }
  
    
    cloudinary.v2.uploader.upload(file.tempFilePath, {folder:"test"}, async(err,result)=>{
      if(err) throw err;
      res.status(200).json({public_id: result.public_id, url: result.secure_url})
    })

    
  } catch (error) {
    res.status(500).send(error);
  }  
});

const removeTmp = (path) => {
  fs.unlink(path, err =>{
      if(err) throw err;

  })
}

export default router;
