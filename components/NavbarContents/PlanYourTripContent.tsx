import { Sessions, PlaaTrip } from "@/constants";
import React from "react";

const PlanYourTripContent = () => {
  return (
    <div className="flex gap-12 px-8 py-5 bg-slate-900 backdrop-blur-lg bg-opacity-75">
      <div className="space-y-4">
        <div className="font-bold text-lg text-cyan-200 whitespace-nowrap">
          Plan your Trip
        </div>
        <div className="space-y-4">
          {PlaaTrip.map((option) => (
            <div key={option.href}>
              <a
                href={option.href}
                className="cursor-pointer hover:text-yellow-300 hover:font-semibold whitespace-nowrap"
              >
                {option.label}
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="font-bold text-lg text-cyan-200 whitespace-nowrap">Sessions to visit</h2>
        <div className="space-y-2">
          {Sessions.map((Sessions) => (
            <div key={Sessions.href}>
              <a
                href={Sessions.href}
                className="cursor-pointer hover:text-yellow-300 hover:font-semibold whitespace-nowrap"
              >
                {Sessions.label}
              </a>
              <div className="text-gray-500 whitespace-nowrap">
                {Sessions.month}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanYourTripContent;
