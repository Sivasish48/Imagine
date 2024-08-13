import { useState } from 'react';
 import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { Zap,Loader } from 'lucide-react';

export function Generate() {
  const [prompt, setPrompt] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  
  async function generateImage() {
    setError('');
    setImages([]);
    setIsLoading(true);
  
    try {
      const response = await fetch('https://imagine-d75mnpsbt-sivasish48s-projects.vercel.app/generate-image', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
           
        },
        body: JSON.stringify({
          prompt,
          negative_prompt: '', // You can add a state for this if needed
          width: 512,
          height: 512,
          samples: 1, // Changed from num_outputs to samples
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to generate image');
      }
  
      const data = await response.json();
      
      if (data.status === 'success' && Array.isArray(data.output)) {
        setImages(data.output);
      } else if (data.status === 'processing') {
        // Handle the case where the image is still being generated
        console.log('Image is still being generated. You may need to implement polling.');
      } else {
        console.error('Unexpected response:', data);
        throw new Error('Unexpected response format');
      }
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    }finally{
      setIsLoading(false);
    }
  }
  async function downloadImage(imageUrl, index) {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `generated_image_${index + 1}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading image:', error);
      setError('Failed to download image');
    }
  }


  return (
    <section className="w-full min-h-screen py-12 bg-black text-white relative">
    <header>
      <div className="absolute top-4 left-4 z-20">
        <Zap className="text-white h-8 w-8" />
      </div>
    </header>
    <div className="container flex flex-col items-center justify-center gap-8 px-4 md:px-6 mt-16">
      <div className="text-center space-y-2">
        <p className="text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Generate AI-powered images with just a click.
        </p>
      </div>
      <div className="flex w-full max-w-md items-center space-x-2 bg-black">
        <Input
          type="text"
          placeholder="Enter a prompt..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="flex-1 rounded-md border border-white/10 bg-black px-4 py-2 text-white focus:ring-1 focus:ring-white/30 placeholder:text-white/50"
        />
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Button
            type="button"
            onClick={generateImage}
            disabled={isLoading}
            className="rounded-md bg-white px-6 py-2 text-sm font-medium text-[#8b00ff] shadow-sm transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
          >
            {isLoading ? (
              <Loader className="animate-spin h-5 w-5" />
            ) : (
              'Generate'
            )}
          </Button>
        </motion.div>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {images.length > 0 && (
        <div className="flex flex-wrap justify-center items-center w-full gap-4">
          {images.map((imageUrl, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={imageUrl}
                alt={`Generated Image ${index + 1}`}
                className="w-64 h-64 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
              <Button
                onClick={() => downloadImage(imageUrl, index)}
                className="mt-2 bg-white px-4 py-2 text-sm font-medium text-[#8b00ff] rounded-lg shadow-sm transition-colors hover:bg-white/90"
              >
                Download Image
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  </section>
  );
}

function ImageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
