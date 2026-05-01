import { useRef, useState } from "react";
import "./App.css";
import GardenCard, { type GardenProps } from "./components/GardenCard";

export default function App() {
  // const gardenArray = gardenArrayState[0]
  // const setGardenArray = gardenArrayState[1]
  const [gardenArray, setGardenArray] = useState<GardenProps[]>([]);

  const dateInputRef = useRef<HTMLInputElement>(null);
  const durationInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input ref={dateInputRef} />
      <input ref={durationInputRef} />
      <input ref={descriptionInputRef} />
      <button
        onClick={() => {
          const newArray: GardenProps[] = [];

          for (let i = 0; i < gardenArray.length; i++) {
            const gardenInfo = gardenArray[i];

            newArray.push(gardenInfo);
          }

          newArray.push({
            date: dateInputRef.current?.value,
            duration: durationInputRef.current?.value,
            description: descriptionInputRef.current?.value,
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
