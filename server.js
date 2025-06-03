const express = require('express');
const path = require('path');
const app = express();

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static assets
app.use(express.static(path.join(__dirname, 'public')));

// Pages list – all lowercase file names
const pages = ['homepage', 'aboutus', 'mid-brain', 'blogs', 'contact', 'counseling', 'dbit', 'f', 'g', 'nlp', 'memory-techniques', 'personality', 'step', 'kmep', 'ycep', 'w1', 'w2', 'w3'];

// Dynamic routes
pages.forEach(page => {
  const routePath = page === 'homepage' ? '/' : `/${page}`;
  app.get(routePath, (req, res) => {
    res.render(page);
  });
});

// 404 fallback
app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at: http://localhost:${PORT}`);
});
