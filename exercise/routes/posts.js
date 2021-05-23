var express = require("express");
var router = express.Router();
const Post = require("../models/Post");

router.get("/all", async (_, res) => {
  const posts = await Post.findAll();
  res.status(200).send(posts);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const foundPost = await Post.findByPk(id);
  foundPost
    ? res.send(foundPost.toJSON())
    : res.send("That post doesn't exist!");
});

router.post("/new-post", async (req, res) => {
  await Post.create(req.body);
  const posts = await Post.findAll();
  res.status(200).redirect("http://localhost:3000/all-posts.html");
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const affectedRows = await Post.update(req.body, { where: { id } });
  affectedRows
    ? res.send(`You have changed ${affectedRows} post!`)
    : res.send("None post have been injured!");
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const destroyRows = await Post.destroy({ where: { id: id } });
  destroyRows
    ? res.send(`You have destroyed ${destroyRows} post!`)
    : res.send("None post have been destroyed");
});

module.exports = router;
