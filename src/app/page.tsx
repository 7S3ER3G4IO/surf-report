import Map from "@/components/Map";
import SpotSwipe from "@/components/SpotSwipe";

export default function Home() {
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <Map />
      <SpotSwipe />
    </main>
  );
}
