import { useState, useEffect } from 'react';

const ImageGrid = ({ images }: { images: {name: string, logo: string}[] }) => {
  const [highlightedImage, setHighlightedImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHighlightedImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 800); // Adjust the interval time as needed

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="flex flex-wrap gap-6 items-center justify-center pb-6">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative cursor-pointer transition duration-500 ease-in-out mr-4 ${
            index === highlightedImage ? 'scale-150 opacity-100' : 'grayscale opacity-75'
          }`}
        >
          <img
            src={image.logo}
            alt={image.name}
            className='w-28 h-auto'
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
