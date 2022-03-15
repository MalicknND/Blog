const express = require("express");
const mongoose = require("mongoose");

const app = express();

// ! connexion a la base de données mongoDb
mongoose.connect(
  "mongodb+srv://Test:Test@cluster0.qt3kq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connection to mongodb database was successful!");
  }
);

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// routes
app.use(require("./routes/index"));
app.use(require("./routes/compose"));
app.use(require("./routes/blog"));

//route pour naviguer entre les différentes pages
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/apropos", (req, res) => {
  res.render("apropos");
});

// configuration du serveur
app.listen(8000, () => console.log("Server started listening on port: 8000"));
