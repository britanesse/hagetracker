export type GardenProps = {
  date: string | undefined;
  duration: string | undefined;
  description: string | undefined;
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
