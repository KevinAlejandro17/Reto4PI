import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas
    camera={{
      fov: 50,
      near: 0.1,
      far: 200,
      position: [0, 4, 8],
    }}
    shadows={true}
  >
    <Experience />
  </Canvas>
);
