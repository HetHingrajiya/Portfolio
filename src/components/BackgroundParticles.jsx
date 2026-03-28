import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const BackgroundParticles = ({ isDark }) => {
  const [init, setInit] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
            onHover: { 
              enable: true, 
              mode: ["grab", "bubble"] 
            },
            resize: true,
          },
          modes: { 
            grab: { 
              distance: 200, 
              links: { 
                opacity: 0.8,
                color: isDark ? "#ffffff" : "#4f46e5"
              } 
            },
            bubble: {
              distance: 200,
              size: 6,
              duration: 2,
              opacity: 0.8,
              speed: 3
            }
          },
        },
        particles: {
          color: { value: isDark ? "#ffffff" : "#4f46e5" },
          links: {
            color: isDark ? "#ffffff" : "#4f46e5",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1.2,
            consent: false,
            triangles: {
              enable: !isMobile,
              opacity: 0.05
            }
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 1.2,
            straight: false,
          },
          number: { 
            density: { enable: true, area: 900 }, 
            value: isMobile ? 30 : 60 
          },
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
