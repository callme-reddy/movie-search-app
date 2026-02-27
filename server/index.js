const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Search movies by title
app.get('/api/search', async (req, res) => {
  const { title } = req.query;
  if (!title) return res.status(400).json({ error: 'Title is required' });
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${encodeURIComponent(title)}&apikey=${process.env.OMDB_API_KEY}`
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Get single movie details by IMDB ID
app.get('/api/movie/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?i=${id}&apikey=${process.env.OMDB_API_KEY}`
    );
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
