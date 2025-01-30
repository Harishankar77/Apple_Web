import React from "react";

const CardsRl = () => {
  const images = [
    "/img10.png",
    "/img11.png",
    "/img13.png",
    "/img12.png",
    "/img14.png",
    "/img16.png",
    "/img17.png",
    "/img18.png",
  ];

  return (
    <div className="overflow-hidden mt-9">
      <div className="animate-marquee-rl flex gap-4 w-max">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-[80vw] sm:w-[400px] h-[300px] sm:h-[250px] flex-shrink-0"
          >
            <img
              src={src}
              alt={`Cart Image ${index}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsRl;
