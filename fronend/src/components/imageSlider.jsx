import { useState } from "react";

export default function ImageSlider({ images }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] bg-background rounded-lg shadow-sm overflow-hidden flex flex-col justify-center items-center gap-3 p-3 sm:p-4 fade-in">
      {/* Main Image */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] bg-neutral rounded-md overflow-hidden">
        <img
          className="w-full h-full object-cover transition-opacity duration-300"
          src={images[activeImage]}
          alt={`Product image ${activeImage + 1}`}
        />
        {/* Navigation Arrows */}
        <button
          onClick={() =>
            setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
          }
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-acensed/80 text-white p-2 rounded-full hover:bg-acensed-light transition-all duration-200"
          aria-label="Previous image"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() =>
            setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
          }
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-acensed/80 text-white p-2 rounded-full hover:bg-acensed-light transition-all duration-200"
          aria-label="Next image"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Thumbnail Gallery */}
      <div className="w-full flex justify-center gap-2 sm:gap-3 overflow-x-auto scrollbar-custom py-2">
        {images.map((img, index) => (
          <img
            key={index}
            onClick={() => setActiveImage(index)}
            className={`w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] object-cover rounded-md cursor-pointer transition-all duration-200 ${
              activeImage === index
                ? "border-2 border-accent scale-105"
                : "border border-neutral hover:border-acensed-light hover:scale-105"
            }`}
            src={img}
            alt={`Thumbnail ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}