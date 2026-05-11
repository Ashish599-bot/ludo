"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const tournamentName = "Ludo Tournament";
  const [page, setPage] = useState<"create" | "code">("create");
  const [generatedCode, setGeneratedCode] = useState("");
  const [playerName, setPlayerName] = useState("");

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

  // ───────────────────────── CREATE PAGE ─────────────────────────
  if (page === "create") {
    return (
      <main
        className="h-screen w-screen flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundColor: "#2ea04a",
          backgroundImage: "url('/image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >

        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(121,214,123,0.45)", zIndex: 2 }}
        />

        <div className="relative w-full flex items-center justify-center" style={{ zIndex: 10 }}>
          <div className="flex flex-col items-center justify-center w-full px-8" style={{ maxWidth: "700px" }}>

            <h1
              className="text-white text-center mb-14 "
              style={{
                fontFamily: "'Georgia', 'Impact', serif,'Luckiest-Guy'",
                fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                textShadow: "3px 4px 0px rgba(0,0,0,0.25), 0 0 60px rgba(255,255,255,0.15)",
                WebkitTextStroke: "1.5px rgba(255,255,255,0.25)",
              }}
            >
              code generation
            </h1>

            <div className="flex flex-col items-center gap-7 w-full">
              <div className="flex flex-row gap-4 justify-center">
                <p className="bg-white text-black p-4 flex justify-center items-center border rounded-2xl shadow-2xl px-16 py-2">
                </p>
                <Image
                  src="/Vector.png"
                  alt="Copy tournament code"
                  width={40}
                  height={40}
                  className="mt-2 size-10"
                />
              </div>

              <h1 className="mt-4 text-black text-xl">
                <span className="text-red-400 text-2xl">*</span>Share this code with the players to start your ludo tournament
              </h1>

              <button
                onClick={handleCreate}
                className="px-20 py-4 rounded-xl text-gray-700 font-semibold text-lg transition duration-300 hover:bg-white active:scale-95 cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(6px)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                }}
              >
                View Participants
              </button>

              <Link
                href="/"
                className="flex-1 py-4 rounded-xl font-semibold text-lg transition duration-300 active:scale-95 bg-white border-2 border-white text-black px-12 cursor-pointer"
              >
                ← Back
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main
      className="h-screen w-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundColor: "#2ea04a",
        backgroundImage: "url('/image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 z-0" style={{ backgroundColor: "rgba(121,214,123,0.4)" }} />

      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(30,100,40,0.55)", zIndex: 2 }}
      />

      <div className="relative w-full flex items-center justify-center" style={{ zIndex: 10 }}>
        <div className="flex flex-col items-center justify-center w-full px-8" style={{ maxWidth: "700px" }}>

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

          <p className="text-white/70 text-sm uppercase tracking-widest mb-10">
            {tournamentName}
          </p>

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
                fontFamily: "'Courier New', monospace",
              }}
            >
              {generatedCode}
            </p>
          </div>

          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Enter Player Name"
            className="w-full px-6 py-4 rounded-xl text-white text-lg"
            style={{
              background: "rgba(255,255,255,0.10)",
              border: "2px solid rgba(255,255,255,0.75)",
              backdropFilter: "blur(6px)",
            }}
          />

          <div className="flex gap-4 w-full mt-6">
            <button
              onClick={handleBack}
              className="flex-1 py-4 rounded-xl font-semibold text-lg bg-white/20 text-white border"
            >
              ← Back
            </button>

            <Link className="flex-[2] py-4 rounded-xl bg-white text-black font-semibold text-center" href="/third_page">

              Join Tournament
            </Link>
          </div>
        </div>
      </div>
    </main >
  );
}
