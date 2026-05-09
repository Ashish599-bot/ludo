"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [tournamentName, setTournamentName] = useState("");

  const handleCreate = () => {
    if (tournamentName.trim()) {
      router.push("/second_page");
    }
  };

  return (
    <main
      className="h-screen w-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: "#2ea04a" }}
    >
      <Image
        src="/image.png"
        alt=""
        fill
        sizes="100vw"
        priority
        className="z-0 object-cover"
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{ backgroundColor: "rgba(121,214,123,0.55)" }}
      />

      <div
        className="relative z-10 flex flex-col items-center justify-center w-full px-8"
        style={{ maxWidth: "700px" }}
      >
        <h1
          className="text-white text-center mb-14"
          style={{
            fontFamily: "'Georgia', 'Impact', serif, 'Luckiest-Guy'",
            fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            textShadow:
              "3px 4px 0px rgba(0,0,0,0.25), 0 0 60px rgba(255,255,255,0.15)",
            WebkitTextStroke: "1.5px rgba(255,255,255,0.25)",
          }}
        >
          Ludo Tournament
        </h1>

        <div className="flex flex-col items-center gap-7 w-full">
          <input
            type="text"
            value={tournamentName}
            onChange={(e) => setTournamentName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCreate()}
            placeholder="Tournament Name"
            className="w-full px-6 py-4 rounded-xl text-white text-lg placeholder-white/70 focus:outline-none transition duration-300"
            style={{
              background: "rgba(255,255,255,0.10)",
              border: "2px solid rgba(255,255,255,0.75)",
              backdropFilter: "blur(6px)",
              fontSize: "1.15rem",
            }}
          />

          <button
            onClick={handleCreate}
            className="px-20 py-4 rounded-xl text-gray-700 font-semibold text-lg transition duration-300 hover:bg-white active:scale-95 cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
            disabled={!tournamentName.trim()}
            style={{
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(6px)",
              fontSize: "1.1rem",
              letterSpacing: "0.02em",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            }}
          >
            Create
          </button>
        </div>
      </div>
    </main>
  );
}
