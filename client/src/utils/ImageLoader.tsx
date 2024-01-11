import React, { useState } from "react";

interface ImageLoaderTypeProps {
  src: string;
  alt?: string;
}
const ImageLoader: React.FC<ImageLoaderTypeProps> = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className=" flex flex-col h-full w-full text-start items-center justify-center">
      {loading ? (
        <div className="transition duration-500 animate-spin rounded-full h-14 w-14 m-8  border-t-2 border-b-2 border-purple-500"></div>
      ): <></>}
      
      <img
      draggable="false"
      className="transition duration-500"
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        style={{ display: loading ? "none" : "block" }}
      />
    </div>
  );
};

export default ImageLoader;
