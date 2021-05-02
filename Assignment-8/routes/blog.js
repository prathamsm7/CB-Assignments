const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");
const Comment = require("../models/comment");

//Getting All blogs
router.get("/blogs", async (req, res) => {
  const blogs = await Blog.find({});
  // console.log(blogs);
  res.render("blogs/index", { blogs });
});

//Getting new blog form
router.get("/blogs/new", (req, res) => {
  res.render("blogs/new");
});

//Saving new Blog
router.post("/blogs", async (req, res) => {
  const blog = req.body.blog;
  // console.log(req.body.blog);
  await Blog.create(blog);
  res.redirect("/blogs");
});

//Getting particular blog
router.get("/blogs/:id", async (req, res) => {
  // res.send("showing blog");
  const blog = await Blog.findById(req.params.id).populate("comments");
  res.render("blogs/show", { blog });
});

//Get Edit form
router.get("/blogs/:id/edit", async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.render("blogs/edit", { blog });
  // console.log(blog);
});

//Updating Blog
router.patch("/blogs/:id", async (req, res) => {
  await Blog.findByIdAndUpdate(req.params.id, req.body.blog);
  res.redirect(`/blogs/${req.params.id}`);
});

// Deleting Blog
router.delete("/blogs/:id", async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.redirect("/blogs");
});

//Comment Route
router.post("/blogs/:id/comment", async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  const comment = new Comment(req.body);

  blog.comments.push(comment);

  await comment.save();
  await blog.save();
  res.redirect(`/blogs/${req.params.id}`);
});

module.exports = router;
