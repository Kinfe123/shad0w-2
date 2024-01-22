"use client";
import React from "react";
import { WavyBackground } from "./wavte-bg"

export function WavyBackgroundDemo() {
  return (
    <WavyBackground backgroundFill="transparent"  speed="fast" waveOpacity={0.5} className="max-w-4xl blur-sm backdrop-blur-md mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Hero waves are cool
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Leverage the power of canvas to create a beautiful hero section
      </p>
    </WavyBackground>
  );
}
