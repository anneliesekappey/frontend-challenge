import express from 'express';
import { createServer } from 'http';

const app = express();

app.post('/proxy', async (req, res) => {
  try {
    const proxyResponse = await post(req);
    res.status(proxyResponse.status).json(proxyResponse.body);
  } catch (error) {
    console.error('Error handling proxy request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const server = createServer(app);
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
