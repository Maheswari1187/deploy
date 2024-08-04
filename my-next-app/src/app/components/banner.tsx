import React from 'react';
import { FaEdit } from 'react-icons/fa'; // Import the edit icon from react-icons

interface BannerProps {
  title: string;
  description: string;
  cta: string;
  imageUrl: string;
  background: string;
  onEdit: () => void;
}

const BannerImageComp: React.FC<BannerProps> = ({ title, description, cta, imageUrl, background, onEdit }) => {
  return (
    <div className="relative p-4 mb-6 rounded-lg shadow-lg" style={{ backgroundColor: background }}>
      <div className="w-11/12 mx-auto">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover rounded-lg mb-4"
          style={{ width: '180px', height: '90px' }}
        />
      </div>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-md mb-2">{description}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded mt-2">{cta}</button>
      <div className="mt-4">
        <button onClick={onEdit} className="bg-gray-800 text-white py-2 px-4 rounded flex items-center">
          <FaEdit className="mr-2" /> Edit
        </button>
      </div>
    </div>
  );
};

export default BannerImageComp;
