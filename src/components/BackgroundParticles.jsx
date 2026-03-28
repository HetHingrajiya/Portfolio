import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const BackgroundParticles = ({ isDark }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return <></>;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 z-0 pointer-events-none"
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            resize: true,
          },
          modes: { grab: { distance: 160, links: { opacity: 0.6 } } },
        },
        particles: {
          color: { value: isDark ? "#ffffff" : "#4f46e5" },
          links: {
            color: isDark ? "#ffffff" : "#4f46e5",
            distance: 140,
            enable: true,
            opacity: 0.15,
            width: 1.5,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 1.2,
            straight: false,
          },
          number: { density: { enable: true, area: 900 }, value: 60 },
          opacity: { value: isDark ? 0.3 : 0.4 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 4 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default BackgroundParticles;
