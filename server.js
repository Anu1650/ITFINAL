const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

// Homepage routes
app.get("/", (req, res) => res.render("Homepage"));
app.get("/Homepage", (req, res) => res.render("Homepage"));
app.get("/homepage", (req, res) => res.render("Homepage"));

// Other pages routes
const pages = [
  "AboutUs", "mid-brain", "blogs", "Contact", "Counseling", "dbit",
  "f", "g", "nlp", "memory-techniques", "personality", "step",
  "kmep", "ycep", "w1", "w2", "w3"
];

pages.forEach(page => {
  app.get(`/${page}`, (req, res) => {
    res.render(page);
  });
});

// 404 fallback for unknown routes
app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at: http://localhost:${PORT}`);
});
