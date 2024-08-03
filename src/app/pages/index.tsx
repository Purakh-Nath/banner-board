// pages/index.tsx
import React, { useState } from 'react';
import { banners as initialBanners } from '../data/banners';
import BannerImageComp from '../components/BannerImageComp';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';

const HomePage: React.FC = () => {
  const [banners, setBanners] = useState(initialBanners);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(null);

  const handleEdit = (banner: any) => {
    setCurrentBanner(banner);
    setIsEditing(true);
  };

  const handleSave = (updatedBanner: any) => {
    setBanners(banners.map((b) => (b.id === updatedBanner.id ? updatedBanner : b)));
  };

  return (
    <div>
      {banners.map((banner) => (
        <BannerImageComp
          key={banner.id}
          {...banner}
          onEdit={() => handleEdit(banner)}
        />
      ))}
      {isEditing && currentBanner && (
        <EditBannerTemplateBs
          banner={currentBanner}
          onSave={handleSave}
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default HomePage;
