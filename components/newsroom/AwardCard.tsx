import React from "react";

interface AwardCardProps {
  logo: string;
  title: string;
  organization: string;
  year: string;
}

const AwardCard: React.FC<AwardCardProps> = ({ logo, title, organization, year }) => (
  <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center animate-fade-in">
    <img src={logo} alt={title} className="h-16 mb-3 grayscale hover:grayscale-0 transition duration-300" />
    <div className="font-semibold mb-1">{title}</div>
    <div className="text-gray-500 text-sm mb-1">{organization}</div>
    <div className="text-xs text-gray-400">{year}</div>
  </div>
);

export default AwardCard;
