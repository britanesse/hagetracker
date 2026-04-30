export default function GardenCard(props: {
  date: string;
  duration: string;
  description: string;
}) {
  console.log(props);

  return (
    <div>
      <div>{props.date}</div>
      <div>{props.duration}</div>
      <div>{props.description}</div>
    </div>
  );
}
