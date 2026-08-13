import { useRef, useState } from "react";
import "./App.css";
import GardenCard, { type GardenProps } from "./components/GardenCard";
import { download, formatDate } from "./utils";

export default function App() {
  const localData = localStorage.getItem("gardenData");
  let gardenArrayInitial = [];
  if (localData != null) {
    gardenArrayInitial = JSON.parse(localData);
  }

  // const gardenArray = gardenArrayState[0]
  // const setGardenArray = gardenArrayState[1]
  const [gardenArray, setGardenArray] =
    useState<GardenProps[]>(gardenArrayInitial);

  const durationInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input ref={durationInputRef} />
      <input ref={descriptionInputRef} />
      <button
        onClick={() => {
          const newArray: GardenProps[] = [];

          for (let i = 0; i < gardenArray.length; i++) {
            const gardenInfo = gardenArray[i];

            newArray.push(gardenInfo);
          }

          const today = new Date();

          newArray.push({
            date: formatDate(today),
            duration: durationInputRef.current?.value,
            description: descriptionInputRef.current?.value,
          });

          localStorage.setItem("gardenData", JSON.stringify(newArray));

          setGardenArray(newArray);
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          const gardenTrackerData = localStorage.getItem("gardenData");
          console.log(gardenTrackerData);
          if (gardenTrackerData != null) {
            download("gardentracker", gardenTrackerData);
          }
        }}
      >
        export
      </button>
      <input
        type="file"
        onChange={async (event) => {
          const firstFile = event.target.files?.[0];

          const text = await firstFile?.text();
          if (text != null) {
            const gardenPropsArray = JSON.parse(text);

            localStorage.setItem("gardenData", text);
            setGardenArray(gardenPropsArray);
          }
        }}
      />
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
