import { useEffect, useState } from "react";
import brandImg from "@/assets/brand/svgexport-4.svg";

interface LoadingScreenProps {
  duration?: number;
  initial?: boolean;
  complete?: boolean;
}

const LoadingScreen = ({
  duration = 4000,
  initial = false,
  complete = false,
}: LoadingScreenProps) => {
  const [scale, setScale] = useState(0.1);
  const [opacity, setOpacity] = useState(1);
  const [finishedByTime, setFinishedByTime] = useState(initial);

  const isComplete = complete || finishedByTime;

  useEffect(() => {
    const growAnimation = setTimeout(() => {
      setScale(10);
    }, duration * 0.8);

    const fadeOutTimer = setTimeout(() => {
      setOpacity(1);
    }, duration * 0.95);

    const completionTimer = setTimeout(() => {
      setFinishedByTime(true);
    }, duration);

    return () => {
      clearTimeout(growAnimation);
      clearTimeout(fadeOutTimer);
      clearTimeout(completionTimer);
    };
  }, [duration]);

  useEffect(() => {
    if (!isComplete) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.height = "100vh";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
      document.documentElement.style.overflow = "";
      document.documentElement.style.height = "";
    };
  }, [isComplete]);

  if (isComplete) return null;

  return (
    <div
      className="fixed inset-0 z-999 flex items-center justify-center bg-black transition-opacity duration-300"
      style={{ opacity }}
    >
      <div
        className="relative flex items-center justify-center"
        style={{
          width: `${1024 * scale}px`,
          height: `${1024 * scale}px`,

          transition: `width ${duration * 0.8}ms ease-out, height ${duration * 0.8}ms ease-out`,
        }}
      >
        <img
          src={brandImg}
          alt="Logo da empresa Lions seminovos"
          className="pulse-slow-scale rounded-full object-cover"
        />

        <div className="absolute inset-0 animate-ping animation-duration-[3s] rounded-full bg-white opacity-20"></div>

        <div className="absolute inset-0 rounded-full bg-linear-to-br from-transparent via-transparent to-black/10"></div>
      </div>

      <div className="absolute bottom-20 text-xl font-light tracking-wider text-white opacity-80">
        Carregando...
      </div>
    </div>
  );
};

export default LoadingScreen;
