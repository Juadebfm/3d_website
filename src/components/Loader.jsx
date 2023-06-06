import { Html, useProgress } from "@react-three/drei";
import ReactGA from "react-ga";

const Loader = () => {
  ReactGA.event({
    category: "Loading",
    action: "Loading",
  });
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
