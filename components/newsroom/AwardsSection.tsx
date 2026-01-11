import React from "react";
import AwardCard from "./AwardCard";

interface Award {
  id: string;
  logo: string;
  title: string;
  organization: string;
  year: string;
}

interface AwardsSectionProps {
  awards: Award[];
}

const AwardsSection: React.FC<AwardsSectionProps> = ({ awards }) => (
  <section className="py-12 mt-16 rounded-xl">
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center">Awards & Recognition</h2>
      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {awards.map((award) => (
          <AwardCard key={award.id} {...award} />
        ))}
      </div>
    </div>
  </section>
);

export default AwardsSection;
