
import React from 'react';
import Image from 'next/image';

interface BannerProps {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  titleClass: string;
  descriptionClass: string;
  ctaClass: string;
  containerClass: string;
  coverImage:string;
  coverImageClass:string;
  onEdit: () => void;
}

const BannerImageComp: React.FC<BannerProps> = ({
  title,
  description,
  cta,
  image,
  background,
  titleClass,
  descriptionClass,
  ctaClass,
  containerClass,
  coverImage,
  coverImageClass,
  onEdit,
}) => {
  // Log the containerClass to the console
  console.log(containerClass);

  return (
    <div className="relative p-5" style={{ background }}>
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-4  ">


      <div className="relative w-full h-full">


          {/* Base Image */}
          <img
            src={coverImage}
            alt={title}
            // layout="responsive"
            // width={532}
            // height={32}
            // className='mb-60 mt-30'
            className={coverImageClass}
          />
          {/* Overlay Image */}
          <Image
            src={image}
            alt={`${title} overlay`}
            layout="responsive"
            width={720}
            height={1080}
            className="absolute inset-0  object-cover "
          />


        {/* <div className="relative">
          <Image
            src={image}
            alt={title}
            layout="responsive"
            width={1080}
            height={720}
            className="rounded-lg z-50"
          /> */}
          <div className={containerClass}>
            <h2 className={titleClass}>{title}</h2>
            <p className={descriptionClass}>{description}</p>
            {/* <img className={coverImageClass} src={coverImage} alt="" /> */}
            <button className={ctaClass}>{cta}</button>
          </div>
          <button
            onClick={onEdit}
            className="absolute top-2 right-2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700"
          >
            Edit
          </button>
        </div>
      
      </div>
    </div>
  );
};

export default BannerImageComp;



