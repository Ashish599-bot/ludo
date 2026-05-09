"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [tournamentName, setTournamentName] = useState("");
  const [page, setPage] = useState<"create" | "code">("create");
  const [generatedCode, setGeneratedCode] = useState("");
  const [playerName, setPlayerName] = useState("");

  // Generate a random 6-char alphanumeric code
  const generateCode = () =>
    Math.random().toString(36).substring(2, 8).toUpperCase();

  const handleCreate = () => {
    if (tournamentName.trim()) {
      setGeneratedCode(generateCode());
      setPage("code");
    }
  };

  const handleBack = () => {
    setPage("create");
    setPlayerName("");
  };

  // Shared background + image layout
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <main
      className="h-screen w-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: "#2ea04a" }}
    >
      {/* Green overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: "rgba(121,214,123,0.4)" }}
      />

      {/* Background image top-left large */}
      <Image
        src="/image.png"
        alt="Ludo board"
        width={160}
        height={160}
        priority
        className="absolute top-4 left-4 h-[80vh] w-[90%] object-cover rounded-xl shadow-lg"
        style={{ zIndex: 1 }}
      />

      {/* Dark tint over image so text is readable */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(30,100,40,0.55)", zIndex: 2 }}
      />

      {/* Page content */}
      <div className="relative w-full flex items-center justify-center" style={{ zIndex: 10 }}>
        {children}
      </div>
    </main>
  );

  // ─── CREATE PAGE ────────────────────────────────────────────────
  if (page === "create") {
    return (
      <Wrapper>
        <div
          className="flex flex-col items-center justify-center w-full px-8"
          style={{ maxWidth: "700px" }}
        >
          <h1
            className="text-white text-center mb-14"
            style={{
              fontFamily: "'Georgia', 'Impact', serif",
              fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              textShadow: "3px 4px 0px rgba(0,0,0,0.25), 0 0 60px rgba(255,255,255,0.15)",
              WebkitTextStroke: "1.5px rgba(255,255,255,0.25)",
            }}
          >
           code gerenation
          </h1>

          <div className="flex flex-col items-center gap-7 w-full">
            <p className="bg-white text-black">holle </p>
            <h1>Share this code </h1>
           
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
        </div>
      </Wrapper>
    );
  }

  // ─── CODE PAGE ──────────────────────────────────────────────────
  return (
    <Wrapper>
      <div
        className="flex flex-col items-center justify-center w-full px-8"
        style={{ maxWidth: "700px" }}
      >
        {/* Title */}
        <h1
          className="text-white text-center mb-2"
          style={{
            fontFamily: "'Georgia', 'Impact', serif",
            fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            textShadow: "3px 4px 0px rgba(0,0,0,0.25), 0 0 60px rgba(255,255,255,0.15)",
            WebkitTextStroke: "1.5px rgba(255,255,255,0.25)",
          }}
        >
          Ludo Tournament
        </h1>

        {/* Tournament name subtitle */}
        <p
          className="text-white/70 text-sm uppercase tracking-widest mb-10"
          style={{ letterSpacing: "0.2em" }}
        >
          {tournamentName}
        </p>

        {/* ── Generated Code Display ── */}
        <div
          className="w-full flex flex-col items-center mb-8 py-6 px-6 rounded-2xl"
          style={{
            background: "rgba(0,0,0,0.30)",
            border: "2px solid rgba(255,255,255,0.25)",
            backdropFilter: "blur(8px)",
          }}
        >
          <p className="text-white/60 text-xs uppercase tracking-widest mb-3">
            Tournament Code
          </p>
          <p
            className="text-white font-black tracking-[0.35em]"
            style={{
              fontSize: "clamp(2.5rem, 10vw, 4rem)",
              textShadow: "0 0 30px rgba(255,255,255,0.3)",
              fontFamily: "'Courier New', monospace",
            }}
          >
            {generatedCode}
          </p>
          {/* Regenerate code */}
          <button
            onClick={() => setGeneratedCode(generateCode())}
            className="mt-4 text-white/50 text-xs uppercase tracking-widest hover:text-white/80 transition duration-200"
            style={{ letterSpacing: "0.15em" }}
          >
            ↻ Regenerate
          </button>
        </div>

        {/* ── Player Name Input ── */}
        <div className="flex flex-col items-center gap-5 w-full">
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Enter Player Name"
            className="w-full px-6 py-4 rounded-xl text-white text-lg placeholder-white/70 focus:outline-none transition duration-300"
            style={{
              background: "rgba(255,255,255,0.10)",
              border: "2px solid rgba(255,255,255,0.75)",
              backdropFilter: "blur(6px)",
              fontSize: "1.15rem",
            }}
          />

          {/* Buttons row */}
          <div className="flex gap-4 w-full">
            {/* Back button */}
            <button
              onClick={handleBack}
              className="flex-1 py-4 rounded-xl font-semibold text-lg transition duration-300 active:scale-95"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "2px solid rgba(255,255,255,0.50)",
                color: "white",
                backdropFilter: "blur(6px)",
                fontSize: "1rem",
                letterSpacing: "0.05em",
              }}
            >
              ← Back
            </button>

            {/* Join / Confirm button */}
            <button
              className="flex-[2] py-4 rounded-xl text-gray-700 font-semibold text-lg transition duration-300 hover:bg-white active:scale-95"
              style={{
                background: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(6px)",
                fontSize: "1.1rem",
                letterSpacing: "0.02em",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              }}
            >
              Join Tournament
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}