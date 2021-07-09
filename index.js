import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import fileUpload from "express-fileupload";
import movieRoutes from "./routes/posts.js";
import userRoutes from "./routes/userRoute.js";
import uploadRoutes from "./routes/upload.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json())
app.use(cookieParser())
dotenv.config();
app.use(cors());

app.use(express.json({ limit: "50mb", extended: true }));

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
