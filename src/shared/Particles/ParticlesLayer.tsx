import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  MoveDirection,
  OutMode,
  // type Container,
  type ISourceOptions,
} from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import styles from "./ParticlesLayer.module.scss";

const ParticlesLayer = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // const particlesLoaded = async (container?: Container): Promise<void> => {
  //   console.log(container);
  // };

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      // background: {
      //   color: {
      //     value: "#242424",
      //   },
      // },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
            parallax: {
              enable: true,
              force: 60,
              smooth: 10,
            },
            boundary: {
              width: 30,
              height: 30,
            },
            opacity: {
              value: 0.3,
            },
            particles: {
              color: {
                value: "#0000FF",
              },
            },
          },
        },
        modes: {
          grab: {
            distance: 300,
            duration: 1,
          },
          repulse: {
            distance: 90,
            duration: 0.7,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#a0a0a0",
          distance: 300,
          enable: true,
          opacity: 0.5,
          width: 1.5,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 0.4,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 1000,
          },
          value: 50,
        },
        opacity: {
          value: 0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.22, max: 0.22 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        // particlesLoaded={particlesLoaded}
        options={options}
        className={styles.main}
      />
    );
  }

  return <></>;
};

export default ParticlesLayer;
