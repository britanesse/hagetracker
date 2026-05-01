export type GardenProps = {
  date: string;
  duration: string;
  description: string;
};

export default function GardenCard(props: GardenProps) {
  console.log(props);

  return (
    <div>
      <div>{props.date}</div>
      <div>{props.duration}</div>
      <div>{props.description}</div>
    </div>
  );
}
