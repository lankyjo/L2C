'use client'
import { useState } from 'react';
import Image from 'next/image';

const Follow = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State for the selected image

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc); // Set the clicked image as the selected image
  };

  const closeModal = () => {
    setSelectedImage(null); // Close the modal by resetting the selected image
  };

  return (
    <div id="follow" className='mt-8 border-b border-black pb-8'>
      <h2 className='tracking-widest font-extralight text-2xl md:text-3xl uppercase leading-normal mb-5'>Follow me</h2>
      <div id="photo-grid" className='grid grid-cols-2 gap-3'>
        {['1', '2', '3', '9', '5', '6', '7', '8', '4', '10'].map((number) => (
          <div key={number} className='relative aspect-square border border-black'>
            <Image 
              src={`/gallery/${number}.jpg`}
              alt='gallery photo'
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className='object-cover object-center cursor-pointer'
              onClick={() => handleImageClick(`/gallery/${number}.jpg`)} // On click, set the selected image
            />
          </div>
        ))}
      </div>

      {/* Modal for Fullscreen Image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeModal} // Close the modal when clicked outside the image
        >
          <div className="relative w-[80%] h-screen m-auto aspect-square">
            <Image 
              src={selectedImage}
              alt="Fullscreen gallery photo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain object-center"
            />
            <button 
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Follow;
