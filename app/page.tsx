"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [tournamentName, setTournamentName] = useState("");
  const [created, setCreated] = useState(false);

  const handleCreate = () => {
    if (tournamentName.trim()) {
      setCreated(true);
    }
  };

  return (
    <main
      className="h-screen w-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: "#2ea04a" }}

    >
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: "rgba(121,214,123)" }}
      />
      <Image
        src="/image.png"
        alt="Ludo board"
        width={160}
        height={160}
        priority
        className="absolute top-4 left-4 h-[80vh] w-[90%] object-cover rounded-xl shadow-lg"
      />

      {/* ✅ Main content — z-10 so it's above the overlay */}
      <div
        className="relative z-10 flex flex-col items-center justify-center w-full px-8"
        style={{ maxWidth: "700px" }}
      >
        {/* Title */}
        <h1
          className="text-white text-center mb-14"
          style={{
            fontFamily: "'Georgia', 'Impact', serif",
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

        {!created ? (
          <div className="flex flex-col items-center gap-7 w-full">
            {/* Input */}
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

            {/* Create button */}
            <button
              onClick={handleCreate}
              className="px-20 py-4 rounded-xl text-gray-700 font-semibold text-lg transition duration-300 hover:bg-white active:scale-95"
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
        ) : (
          <div className="flex flex-col items-center gap-5">
            <div className="text-5xl">🎉</div>
            <p
              className="text-white text-2xl font-bold text-center"
              style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.3)" }}
            >
              &quot;{tournamentName}&quot;
            </p>
            <p className="text-white/80 text-sm uppercase tracking-widest">
              Tournament Created!
            </p>
            <button
              onClick={() => {
                setCreated(false);
                setTournamentName("");
              }}
              className="mt-4 px-12 py-3 rounded-xl text-gray-700 font-semibold transition duration-300 hover:bg-white active:scale-95"
              style={{ background: "rgba(255,255,255,0.85)" }}
            >
              Create Another
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
