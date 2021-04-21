import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/post.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "60mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "60mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.get("/", (req, res) => {
  res.send("hello to Memories API");
});

// Connect to cluster on MongoDB
const CONNECTION_URL =
  "mongodb+srv://admin:6MtUEhIzb5dLEqfz@memorylanecluster.0pgen.mongodb.net/postmessages?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running port: ${PORT}`))
  )
  .catch((err) => console.log(`${err} did not connect`));

mongoose.set("useFindAndModify", false);
