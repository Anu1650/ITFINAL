const express = require('express');
const path = require('path');
const app = express();

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Helper function to render page safely
const renderPage = (res, pageName) => {
  res.render(pageName.toLowerCase()); // e.g., 'AboutUs' → 'aboutus.ejs'
};

// ✅ Homepage Routes (case-insensitive)
app.get(['/', '/Homepage', '/homepage'], (req, res) => {
  renderPage(res, 'homepage');
});
app.get(['/', '/Homepage', '/homepage'], (req, res) => {
  renderPage(res, 'Homepage');
});

// ✅ Page Routes
const pages = [
  'AboutUs', 'mid-brain', 'blogs', 'Contact', 'Counseling', 'dbit', 'f',
  'g', 'nlp', 'memory-techniques', 'personality', 'step', 'kmep',
  'ycep', 'w1', 'w2', 'w3','Homepage'
];

pages.forEach((page) => {
  app.get(`/${page}`, (req, res) => renderPage(res, page));
});

// ✅ 404 Error Handling (Render custom EJS page)
app.use((req, res) => {
  res.status(404).render('404'); // views/404.ejs must exist
});

// ✅ Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at: http://localhost:${PORT}`);
});
