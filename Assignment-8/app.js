const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const blogsRoute = require("./routes/blog");
const methodOverride = require("method-override");
// const seedDb = require("./seed");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//DB Connection
mongoose
  .connect("mongodb://localhost:27017/blogApp", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Db Connected");
  })
  .catch((err) => {
    console.log("DB Error");
    console.log(err);
  });

//Routes

// seedDb();

app.use(blogsRoute);

app.listen(3000, () => {
  console.log("Server started om port 3000");
});
