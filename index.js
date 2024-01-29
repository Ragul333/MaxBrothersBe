import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import movieRoutes from "./routes/posts.js";
import userRoutes from "./routes/userRoute.js";
import fileUpload from "express-fileupload";
import uploadRoutes from "./routes/upload.js";
import cookieParser from "cookie-parser";
import fs from 'fs'
import { upload } from "./multer.js";
import cloudinary from "cloudinary";



const app = express();
app.use(express.json())
app.use(cookieParser())
dotenv.config();
app.use(cors());

app.use(express.json({ limit: "50mb", extended: true }));

// uploads

cloudinary.config({
  cloud_name: 'drpwuzvax',
  api_key: '639564898932956',
  api_secret: 'ErJ8fJbn3WY2nanTo8nrLFJoFes',
});


// uploads

app.use('/uploadimages',upload.array('image'),async(req,res)=>{
  // const uploader = async (path) => await uploads.uploads(path,'Images')
  try {
    if(req.method === 'POST'){
      const urls = [];
      
      const files = req.files;
      
      for(let i=0; i<files.length; i++){
        
        cloudinary.v2.uploader.upload(files[i].path,{folder:"test"}, async(err,result)=>{
          /* urls.push(result.url)
          fs.unlinkSync(path) */
          let newArray = (result) => {
            urls.push(result.url)
          }
          newArray(result);          

        })
        // const newPath = await uploader(path)
      }
      res.status(200).json({
        msg:'images uploaded',
        data: urls
      })
    }
  } catch (error){
    res.status(405).json({
      err:'Not uploaded',
      error:error.message
    })
  }

})


/* app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); */

app.use(fileUpload({
  useTempFiles:true
}))

app.use("/movies", movieRoutes);
app.use("/movies", userRoutes);
app.use("/movies/upload", uploadRoutes);
app.get("/", (req, res) => {
  res.send("Welcome");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`))
  )
  .catch((error) => console.log(error));


  
mongoose.set("useFindAndModify", false);
