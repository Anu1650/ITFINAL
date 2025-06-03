const express = require('express');
const path = require('path');
const app = express();

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Homepage routes
app.get('/', (req, res) => {
  res.render('homepage'); // Ensure file is views/homepage.ejs
});
app.get('/Homepage', (req, res) => {
  res.render('homepage');
});
app.get('/homepage', (req, res) => {
  res.render('homepage');
});

// Other pages
app.get('/AboutUs', (req, res) => res.render('AboutUs'));
app.get('/mid-brain', (req, res) => res.render('mid-brain'));
app.get('/blogs', (req, res) => res.render('blogs'));
app.get('/Contact', (req, res) => res.render('Contact'));
app.get('/Counseling', (req, res) => res.render('Counseling'));
app.get('/dbit', (req, res) => res.render('dbit'));
app.get('/f', (req, res) => res.render('f'));
app.get('/g', (req, res) => res.render('g'));
app.get('/nlp', (req, res) => res.render('nlp'));
app.get('/memory-techniques', (req, res) => res.render('memory-techniques'));
app.get('/personality', (req, res) => res.render('personality'));
app.get('/step', (req, res) => res.render('step'));
app.get('/kmep', (req, res) => res.render('kmep'));
app.get('/ycep', (req, res) => res.render('ycep'));
app.get('/w1', (req, res) => res.render('w1'));
app.get('/w2', (req, res) => res.render('w2'));
app.get('/w3', (req, res) => res.render('w3'));

// 404
app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at: http://localhost:${PORT}`);
});
