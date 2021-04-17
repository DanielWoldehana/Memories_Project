import PostMessage from "../models/postMessage.js";

// export const getPosts = (req, res) => {
//   res.send([]);
// };

export const getPosts = async (req, res) => {
  console.log("looking for data");
  try {
    const postMessages = await postMessage.find();

    res.status(200).json(postMessages);
    console.log("This Works");
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
