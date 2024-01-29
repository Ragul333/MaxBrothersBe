import express from "express";
const router = express.Router();
import cloudinary from "cloudinary";
import fs from 'fs'


cloudinary.config({
  cloud_name: 'drpwuzvax',
  api_key: '639564898932956',
  api_secret: 'ErJ8fJbn3WY2nanTo8nrLFJoFes',
});

router.post('/image',(req,res)=>{
  var cloudinaryfiles = [];
  req.body.map((file,index)=>{

    //cloudinary.v2.uploader.upload(file.tempFilePath, {folder:"test"}, async(err,result)=>{
    cloudinary.v2.uploader.upload(`G:\\MaxBros_Copy\\backend\\tmp\\tmp-${index}-${file.lastModified}`,{folder:"test"}, async(err,result)=>{
      if(err) throw err;
      cloudinaryfiles.push({public_id: result.public_id, url: result.secure_url})

      console.log('cloudinaryfiles',cloudinaryfiles)
      console.log('files.length',files.length)
      console.log('index',index)


    })
    if((files.length - 1) === index){
      res.status(200).json(cloudinaryfiles)
    } 
    
  }
  
  )
})

//router.post("/image", (req, res) => {
//  try {
    
/*     if(!req.files || Object.keys(req.files).length === 0){
      return res.status(400).json({message:'No files'})
    }
     */
   /*  const files = req.files.file;

  console.log('Request',req.files)
  console.log('Request.params',req.query)
  console.log('Request.body',req.body)

   console.log(files)


    var cloudinaryfiles = [];
    files.map((file,index)=>{

      cloudinary.v2.uploader.upload(file.tempFilePath, {folder:"test"}, async(err,result)=>{
        if(err) throw err;
        cloudinaryfiles.push({public_id: result.public_id, url: result.secure_url})

        console.log('cloudinaryfiles',cloudinaryfiles)
        console.log('files.length',files.length)
        console.log('index',index)


      })
      if((files.length - 1) === index){
        res.status(200).json(cloudinaryfiles)
      } 
      
    }
    
    )
    
  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }  
}); */

const removeTmp = (path) => {
  fs.unlink(path, err =>{
      if(err) throw err;

  })
}

export default router;
