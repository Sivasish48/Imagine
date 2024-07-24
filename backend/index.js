import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import cors from 'cors';
// import dotenv from 'dotenv';
import Replicate from 'replicate';
// dotenv.config();
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
const STABLE_DIFFUSION_API_KEY="Y4MHPuG57LedrGhx1ECDKyqnXOxD0fFkcEkXoybWbbs7Rcf5IFuuDT2BrXC8"

const REPLICATE_API_TOKEN = "r8_Ad1qTfJRSrAOf9M71sT9z9d8TiMzELI0wM8gJ"
const replicate = new Replicate({
    auth:REPLICATE_API_TOKEN,
  });

  app.post('/generate-image', async (req, res) => {
    const { prompt, negative_prompt, width, height, num_outputs } = req.body;

    try {
        const output = await replicate.run(
            "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",
            {
                input: {
                    prompt,
                    negative_prompt,
                    width,
                    height,
                    num_outputs,
                }
            }
        );

        res.json({ images: output });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
