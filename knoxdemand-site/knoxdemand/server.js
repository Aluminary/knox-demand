const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public'), {
  extensions: ['html'],
  maxAge: '1d'
}));

// Simple health check for Railway
app.get('/healthz', (req, res) => res.status(200).send('ok'));

app.get('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Knox Demand site running on port ${PORT}`);
});
