import React from "react";

const CardsLr = () => {
  const images = [
    "/img21.png",
    "/img22.png",
    "/img23.png",
    "/img24.png",
    "/img26.png",
    "/img27.png",
    "/img28.png",
    "/img21.png",
  ];

  return (
    <div className="overflow-hidden mt-9">
      <div className="animate-marquee-lr flex gap-4 w-max">
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

export default CardsLr;
