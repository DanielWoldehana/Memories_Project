import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
  console.log("looking for data");
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
    console.log("Found data");
  } catch (err) {
    res.status(404).json({ message: err.messge });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = new PostMessage(post);

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });
  res.json(updatedPost);
};
