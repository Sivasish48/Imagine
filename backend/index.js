import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 5000;

app.use(cors(
  {
  origin:["https://imagine-in.vercel.app"],
  methods:["POST"],
  credentials:true
}
));
app.use(bodyParser.json());

const MODELSLAB_API_KEY = process.env.MODELSLAB_API_KEY;

if (!MODELSLAB_API_KEY) {
  console.error('MODELSLAB_API_KEY is not set in the environment variables');
  process.exit(1);
}

app.post('/generate-image', async (req, res) => {
  const { 
    prompt, 
    negative_prompt, 
    width, 
    height, 
    samples
  } = req.body;

  const apiUrl = 'https://modelslab.com/api/v6/realtime/text2img';

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        key: MODELSLAB_API_KEY,
        prompt,
        negative_prompt: negative_prompt || '',
        width: width || 512,
        height: height || 512,
        samples: samples || 1,
        safety_checker: false,
        seed: null,
        base64: false,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Modelslab API response:', data); // For debugging
    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
