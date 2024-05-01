import { useState } from "react";
import PriceOption from "../PriceOption/PriceOption";
import { Audio } from "react-loader-spinner";

const PriceOptons = () => {
  const gyms = [
    {
      id: 1,
      name: "FitZone",
      features: [
        "State-of-the-art equipment",
        "Group fitness classes",
        "Personal training sessions",
      ],
      price: "$99",
    },
    {
      id: 2,
      name: "Ironworks Fitness",
      features: [
        "24/7 access",
        "Sauna and steam room",
        "Nutritional counseling",
      ],
      price: "$79",
    },
    {
      id: 3,
      name: "FlexFusion",
      features: [
        "Yoga and Pilates studio",
        "Cycling classes",
        "Massage therapy",
      ],
      price: "$89",
    },
    {
      id: 4,
      name: "EliteFit",
      features: [
        "Olympic-size swimming pool",
        "CrossFit training area",
        "Sports therapy clinic",
      ],
      price: "$129",
    },
    {
      id: 5,
      name: "Peak Performance Center",
      features: [
        "High-intensity interval training (HIIT)",
        "Nutrition workshops",
        "Physical therapy services",
      ],
      price: "$109",
    },
  ];
  return (
    <>

      <div className="m-16">
        <h2 className="text-3xl text-center mb-10">Best Prices in the Town</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {gyms.map((option) => (
            <PriceOption key={option.id} option={option}></PriceOption>
          ))}
         
        </div>
      </div>
      
    </>
  );
};

export default PriceOptons;
