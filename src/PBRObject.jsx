import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

const PATH = "/static/textures/object/";

const PBRObject = (props) => {
  const texture = useTexture({
    map: PATH + "color.jpg",
    normalMap: PATH + "normal.jpg",
    roughnessMap: PATH + "roughness.jpg",
    aoMap: PATH + "ao.jpg",
  });

  return (
    <mesh castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="red" side={DoubleSide} {...texture} />
    </mesh>
  );
};

export default PBRObject;