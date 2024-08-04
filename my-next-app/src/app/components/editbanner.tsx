// // "use client";

// // import React, { useState, useEffect } from 'react';

// // interface Banner {
// //   id: number;
// //   title: string;
// //   description: string;
// //   cta: string;
// //   imageUrl: string;
// //   background: string;
// // }

// // interface EditBannerProps {
// //   banner: Banner;
// //   onSave: (updatedBanner: Banner) => void;
// //   onClose: () => void;
// // }

// // const EditBannerTemplateBs: React.FC<EditBannerProps> = ({ banner, onSave, onClose }) => {
// //   const [title, setTitle] = useState(banner.title);
// //   const [description, setDescription] = useState(banner.description);
// //   const [cta, setCta] = useState(banner.cta);
// //   const [imageFile, setImageFile] = useState<File | null>(null);
// //   const [imagePreview, setImagePreview] = useState(banner.imageUrl);
// //   const [background, setBackground] = useState(banner.background);

// //   useEffect(() => {
// //     setTitle(banner.title);
// //     setDescription(banner.description);
// //     setCta(banner.cta);
// //     setImagePreview(banner.imageUrl);
// //     setBackground(banner.background);
// //   }, [banner]);

// //   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     const file = event.target.files?.[0];
// //     if (file) {
// //       setImageFile(file);
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         setImagePreview(reader.result as string);
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const handleSubmit = (event: React.FormEvent) => {
// //     event.preventDefault();
// //     const updatedBanner = {
// //       ...banner,
// //       title,
// //       description,
// //       cta,
// //       imageUrl: imagePreview || banner.imageUrl,
// //       background,
// //     };
// //     onSave(updatedBanner);
// //   };

// //   return (
// //     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
// //       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl overflow-y-auto max-h-full">
// //         <h2 className="text-2xl font-bold mb-4">Edit Banner</h2>
// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           <div className="space-y-2">
// //             <label className="block text-sm font-medium text-gray-700">Title:</label>
// //             <input 
// //               type="text" 
// //               value={title} 
// //               onChange={(e) => setTitle(e.target.value)} 
// //               className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             />
// //           </div>
// //           <div className="space-y-2">
// //             <label className="block text-sm font-medium text-gray-700">Description:</label>
// //             <textarea 
// //               value={description} 
// //               onChange={(e) => setDescription(e.target.value)} 
// //               className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// //               rows={4}
// //             />
// //           </div>
// //           <div className="space-y-2">
// //             <label className="block text-sm font-medium text-gray-700">CTA:</label>
// //             <input 
// //               type="text" 
// //               value={cta} 
// //               onChange={(e) => setCta(e.target.value)} 
// //               className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             />
// //           </div>
// //           <div className="space-y-2">
// //             <label className="block text-sm font-medium text-gray-700">Image:</label>
// //             <input 
// //               type="file" 
// //               accept="image/*" 
// //               onChange={handleFileChange}
// //               className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             />
// //             {imagePreview && <img src={imagePreview} alt="Preview" className="w-full h-48 object-cover mt-2 rounded" />}
// //           </div>
// //           <div className="space-y-2">
// //             <label className="block text-sm font-medium text-gray-700">Background Color:</label>
// //             <input 
// //               type="text" 
// //               value={background} 
// //               onChange={(e) => setBackground(e.target.value)} 
// //               className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// //             />
// //           </div>
// //           <div className="flex justify-end space-x-2 mt-4">
// //             <button 
// //               type="submit" 
// //               className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
// //             >
// //               Save
// //             </button>
// //             <button 
// //               type="button" 
// //               onClick={onClose} 
// //               className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors duration-300"
// //             >
// //               Cancel
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default EditBannerTemplateBs;
// "use client";

// import React, { useState, useEffect } from 'react';

// interface Banner {
//   id: number;
//   title: string;
//   description: string;
//   cta: string;
//   imageUrl: string;
//   background: string;
// }

// interface EditBannerProps {
//   banner: Banner;
//   onSave: (updatedBanner: Banner) => void;
//   onClose: () => void;
// }

// const EditBannerTemplateBs: React.FC<EditBannerProps> = ({ banner, onSave, onClose }) => {
//   const [title, setTitle] = useState(banner.title);
//   const [description, setDescription] = useState(banner.description);
//   const [cta, setCta] = useState(banner.cta);
//   const [imageFile, setImageFile] = useState<File | null>(null);
//   const [imagePreview, setImagePreview] = useState(banner.imageUrl);
//   const [background, setBackground] = useState(banner.background);

//   useEffect(() => {
//     setTitle(banner.title);
//     setDescription(banner.description);
//     setCta(banner.cta);
//     setImagePreview(banner.imageUrl);
//     setBackground(banner.background);

//     // Set a timer to close the form after 10 seconds
//     const timer = setTimeout(() => {
//       onClose();
//     }, 10000); // 10 seconds

//     // Clear the timer when the component is unmounted or when the banner changes
//     return () => clearTimeout(timer);
//   }, [banner, onClose]);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       setImageFile(file);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     const updatedBanner = {
//       ...banner,
//       title,
//       description,
//       cta,
//       imageUrl: imagePreview || banner.imageUrl,
//       background,
//     };
//     onSave(updatedBanner);
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl overflow-y-auto max-h-full">
//         <h2 className="text-2xl font-bold mb-4">Edit Banner</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-gray-700">Title:</label>
//             <input 
//               type="text" 
//               value={title} 
//               onChange={(e) => setTitle(e.target.value)} 
//               className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-gray-700">Description:</label>
//             <textarea 
//               value={description} 
//               onChange={(e) => setDescription(e.target.value)} 
//               className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               rows={4}
//             />
//           </div>
//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-gray-700">CTA:</label>
//             <input 
//               type="text" 
//               value={cta} 
//               onChange={(e) => setCta(e.target.value)} 
//               className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-gray-700">Image:</label>
//             <input 
//               type="file" 
//               accept="image/*" 
//               onChange={handleFileChange}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             {imagePreview && <img src={imagePreview} alt="Preview" className="w-full h-48 object-cover mt-2 rounded" />}
//           </div>
//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-gray-700">Background Color:</label>
//             <input 
//               type="text" 
//               value={background} 
//               onChange={(e) => setBackground(e.target.value)} 
//               className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="flex justify-end space-x-2 mt-4">
//             <button 
//               type="submit" 
//               className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
//             >
//               Save
//             </button>
//             <button 
//               type="button" 
//               onClick={onClose} 
//               className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors duration-300"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditBannerTemplateBs;
"use client";

import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa'; // Import the times icon from react-icons

interface Banner {
  id: number;
  title: string;
  description: string;
  cta: string;
  imageUrl: string;
  background: string;
}

interface EditBannerProps {
  banner: Banner;
  onSave: (updatedBanner: Banner) => void;
  onClose: () => void;
}

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({ banner, onSave, onClose }) => {
  const [title, setTitle] = useState(banner.title);
  const [description, setDescription] = useState(banner.description);
  const [cta, setCta] = useState(banner.cta);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState(banner.imageUrl);
  const [background, setBackground] = useState(banner.background);

  useEffect(() => {
    setTitle(banner.title);
    setDescription(banner.description);
    setCta(banner.cta);
    setImagePreview(banner.imageUrl);
    setBackground(banner.background);
  }, [banner]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const updatedBanner = {
      ...banner,
      title,
      description,
      cta,
      imageUrl: imagePreview || banner.imageUrl,
      background,
    };
    onSave(updatedBanner);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl overflow-y-auto max-h-full relative">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <FaTimes size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4">Edit Banner</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">CTA:</label>
            <input
              type="text"
              value={cta}
              onChange={(e) => setCta(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {imagePreview && <img src={imagePreview} alt="Preview" className="w-full h-48 object-cover mt-2 rounded" />}
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Background Color:</label>
            <input
              type="text"
              value={background}
              onChange={(e) => setBackground(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-end space-x-2 mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBannerTemplateBs;

