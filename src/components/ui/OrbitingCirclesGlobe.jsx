"use client";

import React from "react";

export default function OrbitingCirclesGlobe({ title, skills }) {
  // We'll create up to 5 orbits depending on number of skills
  const allOrbitsConfig = [
    { size: "w-[180px] h-[180px] md:w-[200px] md:h-[200px]", duration: 18 },
    { size: "w-[260px] h-[260px] md:w-[290px] md:h-[290px]", duration: 24 },
    { size: "w-[340px] h-[340px] md:w-[380px] md:h-[380px]", duration: 30 },
    { size: "w-[420px] h-[420px] md:w-[470px] md:h-[470px]", duration: 36 },
    { size: "w-[500px] h-[500px] md:w-[560px] md:h-[560px]", duration: 42 },
  ];

  const orbitsCount = Math.min(5, Math.ceil(skills.length / 2));
  const orbits = allOrbitsConfig.slice(0, orbitsCount).map(o => ({ ...o, icons: [] }));

  skills.forEach((skill, i) => {
    const orbitIndex = i % orbitsCount;
    orbits[orbitIndex].icons.push(skill);
  });

  orbits.forEach(orbit => {
    const total = orbit.icons.length;
    orbit.icons = orbit.icons.map((item, i) => ({
      ...item,
      angle: (360 / total) * i - 90 // Start from top
    }));
  });

  return (
    <div className="relative w-full h-[550px] md:h-[650px] flex items-center justify-center">
      <style>{`
        @keyframes orbit-cw {
          from { transform: rotate(var(--start-angle)) }
          to   { transform: rotate(calc(var(--start-angle) + 360deg)) }
        }
        @keyframes orbit-ccw {
          from { transform: rotate(var(--start-angle)) }
          to   { transform: rotate(calc(var(--start-angle) - 360deg)) }
        }
        @keyframes counter-cw {
          from { transform: rotate(var(--counter-offset, 0deg)) }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) - 360deg)) }
        }
        @keyframes counter-ccw {
          from { transform: rotate(var(--counter-offset, 0deg)) }
          to   { transform: rotate(calc(var(--counter-offset, 0deg) + 360deg)) }
        }
      `}</style>

      {/* Orbiting rings */}
      {orbits.map((orbit, index) => {
        const isCW = index % 2 === 0;
        const orbitAnim = isCW ? "orbit-cw" : "orbit-ccw";
        const counterAnim = isCW ? "counter-cw" : "counter-ccw";

        const allIcons = [
          ...orbit.icons,
          ...orbit.icons.map((ic) => ({
            ...ic,
            angle: ic.angle + 180,
            name: `${ic.name}-mirror`,
          })),
        ];

        return (
          <div
            key={index}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${orbit.size}`}
          >
            {allIcons.map((iconData, iconIndex) => (
              <div
                key={iconIndex}
                className="absolute top-0 left-1/2 h-1/2 -ml-[16px] origin-bottom flex flex-col justify-start items-center"
                style={{
                  "--start-angle": `${iconData.angle}deg`,
                  animation: `${orbitAnim} ${orbit.duration}s linear infinite`,
                }}
              >
                <div
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center p-2 border border-slate-300 dark:border-slate-600 rounded-full bg-slate-50 dark:bg-slate-800 -mt-[20px] md:-mt-[24px] relative z-10 shadow-md text-2xl md:text-3xl"
                  title={iconData.name}
                  style={{
                    "--counter-offset": `${-iconData.angle}deg`,
                    animation: `${counterAnim} ${orbit.duration}s linear infinite`,
                  }}
                >
                  {iconData.icon}
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
