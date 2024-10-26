import express from 'express';
const app = express();

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express on Netlify!' });
});

export default app;
