import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

export function Generate() {
  const [prompt, setPrompt] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  async function generateImage() {
    setError('');
    setImages([]);

    try {
      const response = await fetch('http://localhost:5000/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          negative_prompt: '', // You can add UI for this if needed
          width: 512, // Default value, you can add UI to change this
          height: 512, // Default value, you can add UI to change this
          num_outputs: 1, // Default value, you can add UI to change this
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate image');
      }

      const data = await response.json();
      
      if (Array.isArray(data.images)) {
        setImages(data.images);
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    }
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#8b00ff]">
      <header className="fixed top-0 left-0 right-0 px-4 lg:px-6 h-14 flex items-center justify-between bg-[#8b00ff] z-50">
        <a href="#" className="flex items-center justify-center">
          <ImageIcon className="h-8 w-8 text-white" />
          <span className="text-2xl font-bold text-white">Imagine</span>
        </a>
        <Button
          variant="outline"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XIcon className="h-6 w-6 text-white" /> : <MenuIcon className="h-6 w-6 text-white" />}
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </header>
      <div className="container flex flex-col items-center justify-center gap-8 px-4 md:px-6 mt-16">
        <div className="text-center space-y-2">
          <p className="text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Generate stunning AI-powered images with just a few clicks.
          </p>
        </div>
        <div className="flex w-full max-w-md items-center space-x-2">
          <Input
            type="text"
            placeholder="Enter a prompt..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="flex-1 rounded-md border-0 bg-white/10 px-4 py-2 text-white focus:ring-0 placeholder:text-white/50"
          />
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              type="button"
              onClick={generateImage}
              className="rounded-md bg-white px-6 py-2 text-sm font-medium text-[#8b00ff] shadow-sm transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
            >
              Generate
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
                  className="w-64 h-64 overflow-hidden rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                />
                <a
                  href={imageUrl}
                  download={`generated_image_${index + 1}.jpg`}
                  className="mt-2 inline-block bg-white px-4 py-2 text-sm font-medium text-[#8b00ff] rounded-lg shadow-sm transition-colors hover:bg-white/90"
                >
                  Download Image
                </a>
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