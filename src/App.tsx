import { useState } from "react";
import "./App.css";
import GardenCard, { type GardenProps } from "./components/GardenCard";

export default function App() {
  // const gardenArray = gardenArrayState[0]
  // const setGardenArray = gardenArrayState[1]
  const [gardenArray, setGardenArray] = useState<GardenProps[]>([]);

  return (
    <div>
      <button
        onClick={() => {
          const newArray: GardenProps[] = [];

          for (let i = 0; i < gardenArray.length; i++) {
            const gardenInfo = gardenArray[i];

            newArray.push(gardenInfo);
          }

          newArray.push({
            date: "28/4",
            duration: "30 minutter",
            description: "raket løv",
          });

          setGardenArray(newArray);
        }}
      >
        add
      </button>
      {gardenArray.map((gardenInfo) => (
        <GardenCard
          date={gardenInfo.date}
          duration={gardenInfo.duration}
          description={gardenInfo.description}
        />
      ))}
    </div>
  );
}
