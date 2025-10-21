import React from "react";

const officeData = [
  {
    name: "Mumbai Office",
    address: "123 Marine Drive, Mumbai, MH",
    color: "#EF4444", // Red
  },
  {
    name: "Delhi Office",
    address: "456 Connaught Place, New Delhi, DL",
    color: "#3B82F6", // Blue
  },
  {
    name: "Bangalore Office",
    address: "789 MG Road, Bangalore, KA",
    color: "#22C55E", // Green
  },
  {
    name: "Hyderabad Office",
    address: "321 Banjara Hills, Hyderabad, TS",
    color: "#F59E42", // Orange
  },
  {
    name: "Kolkata Office",
    address: "654 Park Street, Kolkata, WB",
    color: "#A855F7", // Purple
  },
  {
    name: "Chennai Office",
    address: "987 Anna Salai, Chennai, TN",
    color: "#14B8A6", // Teal
  },
];

export function OfficeGridMap() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      {/* First column: 3 offices */}
      <div className="flex flex-col gap-4">
        {officeData.slice(0, 3).map((office, i) => (
          <div key={office.name} className="flex items-center gap-3 bg-white rounded-lg shadow p-4">
            <span
              className="inline-block w-4 h-4 rounded-full border-2"
              style={{ backgroundColor: office.color, borderColor: office.color }}
              title={office.name}
            />
            <div>
              <div className="font-semibold text-gray-800">{office.name}</div>
              <div className="text-sm text-gray-500">{office.address}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Second column: Map */}
      <div className="flex items-center justify-center">
        <div className="w-full h-[400px] md:h-[500px] relative">
          {/* MapSVG will be rendered here by parent */}
          <div id="office-map-slot" className="w-full h-full" />
        </div>
      </div>
      {/* Third column: 3 offices */}
      <div className="flex flex-col gap-4">
        {officeData.slice(3).map((office, i) => (
          <div key={office.name} className="flex items-center gap-3 bg-white rounded-lg shadow p-4">
            <span
              className="inline-block w-4 h-4 rounded-full border-2"
              style={{ backgroundColor: office.color, borderColor: office.color }}
              title={office.name}
            />
            <div>
              <div className="font-semibold text-gray-800">{office.name}</div>
              <div className="text-sm text-gray-500">{office.address}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
