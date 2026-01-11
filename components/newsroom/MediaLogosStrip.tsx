import React from "react";

interface MediaLogosStripProps {
  logos: string[];
}

const MediaLogosStrip: React.FC<MediaLogosStripProps> = ({ logos }) => (
  <section className="py-10">
    <div className="container mx-auto">
      <h3 className="text-center text-gray-500 mb-6 font-medium">As featured in</h3>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {logos.map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt="Media logo"
            className="h-10 grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </div>
  </section>
);

export default MediaLogosStrip;
