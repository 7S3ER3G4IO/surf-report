"use client";

import { motion } from "framer-motion";
import { spots } from "@/lib/spots";

export default function SpotSwipe() {
  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: -500, right: 0 }}
      className="absolute bottom-0 left-0 right-0 flex gap-4 p-4 bg-black/60 backdrop-blur"
    >
      {spots.map((spot) => (
        <div
          key={spot.id}
          className="min-w-[260px] rounded-2xl bg-white/95 text-black p-4 shadow"
        >
          <h3 className="font-bold text-lg">{spot.name}</h3>
          <p>Houle : {spot.wave} m</p>
          <p>Vent : {spot.wind} km/h</p>
        </div>
      ))}
    </motion.div>
  );
}
