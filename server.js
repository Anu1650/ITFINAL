const express = require('express');
const path = require('path');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (like CSS, JS, images, etc.) from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// List of EJS page names (without extension)
const pages = ['Homepage', 'AboutUs', 'mid-brain','blogs','Contact','Counseling','dbit','f','g'];

// Dynamic route handling
pages.forEach(page => {
  const routePath = page.toLowerCase() === 'Homepage' ? '/' : `/${page.toLowerCase()}`;
  app.get(routePath, (req, res) => {
    res.render(page); // renders views/PageName.ejs
  });
});

// 404 fallback
app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at: http://localhost:${PORT}`);
});
