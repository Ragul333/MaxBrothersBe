import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import movieRoutes from "./routes/posts.js";
import userRoutes from "./routes/userRoute.js";

const app = express();
dotenv.config();
app.use(cors());

app.use(express.json({ limit: "50mb", extended: true }));

app.use("/movies", movieRoutes);
app.use("/movies", userRoutes);
app.get("/", (req, res) => {
  res.send("Welcome");
});

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
);

app.use(express.static(path.join(__dirname, "/frontend/build")));

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
