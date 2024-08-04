'use client';

import React, { useState } from 'react';
import BannerImageComp from '../components/banner';
import EditBannerTemplateBs from '../components/editbanner';
import ads from '../data/ads.json'; // Ensure this file exists and is in the correct path

interface Banner {
  id: number;
  title: string;
  description: string;
  cta: string;
  imageUrl: string;
  background: string;
}

const Home: React.FC = () => {
  const [selectedBanner, setSelectedBanner] = useState<Banner | null>(null);

  const handleEdit = (banner: Banner) => {
    setSelectedBanner(banner);
  };

  const handleSave = (updatedBanner: Banner) => {
    // Logic to save the updated banner details
    setSelectedBanner(null);
  };

  const handleClose = () => {
    setSelectedBanner(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Ad Banners</h1>
      <div className="flex flex-wrap -mx-2">
        {ads.map((ad: Banner) => (
          <div key={ad.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
            <BannerImageComp
              title={ad.title}
              description={ad.description}
              imageUrl={ad.imageUrl}
              cta={ad.cta}
              background={ad.background}
              onEdit={() => handleEdit(ad)}
            />
          </div>
        ))}
      </div>
      {selectedBanner && (
        <EditBannerTemplateBs
          banner={selectedBanner}
          onSave={handleSave}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default Home;
