const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// הכניסי כאן את ה-API Key שלך
const API_KEY = 'rnd_hrvFbSrdpwC5Au8b4phtpGYoJCNo';

app.get('/services', async (req, res) => {
  try {
    const response = await axios.get('https://api.render.com/v1/services?includePreviews=true&limit=20', {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        Accept: 'application/json'
      }
    });

    // מחזיר את רשימת השירותים כ-JSON
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
