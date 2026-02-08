import { spots } from "@/lib/spots";

export default function SpotPage({ params }: { params: { id: string } }) {
  const spot = spots.find((s) => s.id === params.id);

  if (!spot) return <div className="p-6 text-white">Spot introuvable</div>;

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold">{spot.name}</h1>
      <p>Houle : {spot.wave} m</p>
      <p>Vent : {spot.wind} km/h</p>
    </div>
  );
}
