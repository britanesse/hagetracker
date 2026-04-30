import "./App.css";
import GardenCard from "./components/GardenCard";

export default function App() {
  const gardenArray = [
    {
      date: "28/4",
      duration: "30 minutter",
      description: "raket løv",
    },
    {
      date: "29/4",
      duration: "45 minutter",
      description: "sådde erteblomster",
    },
    {
      date: "30/4",
      duration: "60 minutter",
      description: "spadde opp bed",
    },
  ];

  return (
    <div>
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
