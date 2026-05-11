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
            className="h-full w-screen flex items-center justify-center relative overflow-hidden"
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
                className="absolute inset-0 z-1"
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
                    Tournament Lobby
                </h1>

                <div className="flex flex-col items-center gap-7 w-full">
                    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {[...Array(16)].map((_, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-md"
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-amber-400/20 via-transparent to-emerald-400/10" />
                                <div className="relative flex h-full flex-col justify-between gap-3 text-white">
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="text-xs uppercase tracking-[0.25em] text-white/80">Slot {index + 1}</span>
                                        <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90">
                                            Open
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-xl font-black">Player {index + 1}</p>
                                        <p className="mt-2 text-sm text-white/70">Waiting in lobby</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={handleCreate}
                        className="bg-white px-20 py-4 rounded-xl text-gray-700 font-semibold text-lg transition duration-300 hover:bg-gray-200 active:scale-95 cursor-pointer mb-5"
                        disabled={!tournamentName.trim()}

                    >
                        Start Tournament
                    </button>
                </div>
            </div>
        </main>
    );
}
