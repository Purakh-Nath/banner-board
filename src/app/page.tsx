// // pages/index.tsx
// 'use client'
// import React, { useState } from 'react';
// import Image from 'next/image';
// import { banners as initialBanners } from './data/banners';
// import BannerImageComp from './components/BannerImageComp';
// import EditBannerTemplateBs from './components/EditBannerTemplateBs';

// const Home = () => {
//   const [banners, setBanners] = useState(initialBanners);
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentBanner, setCurrentBanner] = useState(null);

//   // Function to handle the edit button click
//   const handleEdit = (banner: any) => {
//     setCurrentBanner(banner);
//     setIsEditing(true);
//   };

//   // Function to handle saving the edited banner details
//   const handleSave = (updatedBanner: any) => {
//     setBanners(banners.map((b) => (b.id === updatedBanner.id ? updatedBanner : b)));
//     setIsEditing(false);
//   };

//   return (
//     <main>
//       {banners.map((banner) => (
//         <BannerImageComp
//           key={banner.id}
//           title={banner.title}
//           description={banner.description}
//           cta={banner.cta}
//           image={banner.image}
//           background={banner.background}
//           onEdit={() => handleEdit(banner)} id={0} titleClass={''} descriptionClass={''} ctaClass={''} containerClass={''}        />
//       ))}
//       {isEditing && currentBanner && (
//         <EditBannerTemplateBs
//           banner={currentBanner}
//           onSave={handleSave}
//           onClose={() => setIsEditing(false)}
//         />
//       )}
//     </main>
//   );
// };

// export default Home;

// pages/index.tsx
'use client'
import React, { useState } from 'react';
import { banners as initialBanners } from './data/banners';
import BannerImageComp from './components/BannerImageComp';
import EditBannerTemplateBs from './components/EditBannerTemplateBs';

const Home = () => {
  const [banners, setBanners] = useState(initialBanners);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(null);

  // Function to handle the edit button click
  const handleEdit = (banner: any) => {
    setCurrentBanner(banner);
    setIsEditing(true);
  };

  // Function to handle saving the edited banner details
  const handleSave = (updatedBanner: any) => {
    setBanners(banners.map((b) => (b.id === updatedBanner.id ? updatedBanner : b)));
    setIsEditing(false);
  };

  return (
    <main className='bg-blue-500'>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-20 p-5 bg-blue-500 md:gap-4">
        {banners.map((banner) => (
          <BannerImageComp
            key={banner.id}
            title={banner.title}
            description={banner.description}
            cta={banner.cta}
            image={banner.image}
            // background={banner.background}
            titleClass={banner.titleClass}
            descriptionClass={banner.descriptionClass}
            ctaClass={banner.ctaClass}
            containerClass={banner.containerClass}
            coverImage={banner.coverImage}
            coverImageClass={banner.coverImageClass}
            onEdit={() => handleEdit(banner)} id={0} background={''}          />
        ))}
      </div>
      {isEditing && currentBanner && (
        <EditBannerTemplateBs
          banner={currentBanner}
          onSave={handleSave}
          onClose={() => setIsEditing(false)}
        />
      )}
    </main>
  );
};

export default Home;
