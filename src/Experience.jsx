//Componentes de Drei
import { Text, OrbitControls, Sky, Stars } from "@react-three/drei";

//Hooks de React
import { useEffect, useRef, useState } from "react";

//Mis componentes
import Floor from "./Floor";
import Object from "./PBRObject";

//Selector de tipo de luz
import { useControls } from "leva";

//Helpers
import {
  HemisphereLightHelper,
  PointLightHelper,
  SpotLightHelper,
} from "three";

import { useHelper } from "@react-three/drei";

//Función que renderiza el tipo de luz seleccionada
const Light = ({ type, hemisphereLightRef, pointLightRef, spotLightRef }) => {
  if (type === "hemisphereLight") {
    return (
      <hemisphereLight
        castShadow
        ref={hemisphereLightRef}
        position={[0, 1, 0]}
        args={["#87cefa", "#ffffff", 2]}
      />
    );
  } else if (type === "pointLight") {
    return (
      <pointLight
        castShadow
        ref={pointLightRef}
        position-y={2}
        color="yellow"
      />
    );
  } else if (type === "spotLight") {
    return (
      <spotLight
        castShadow
        ref={spotLightRef}
        intensity={2}
        color="orangered"
        position-y={3}
        distance={15}
      />
    );
  } else {
    return <rectAreaLight castShadow ref={null} color="pink" width={10} />;
  }
};

export default function Experience() {
  //Selector para los tipos de luz
  const { lightType } = useControls({
    lightType: {
      options: ["hemisphereLight", "pointLight", "rectAreaLight", "spotLight"],
    },
  });

  const hemisphereLightRef = useRef();
  const pointLightRef = useRef();
  const spotLightRef = useRef();

  const [helper, setHelper] = useState([]);

  //Se validan los cambios en el selector y se asigna el helper que corresponde al tipo de luz
  useEffect(() => {
    let helper;
    if (lightType === "hemisphereLight") {
      helper = [hemisphereLightRef, HemisphereLightHelper, 1];
    } else if (lightType === "pointLight") {
      helper = [pointLightRef, PointLightHelper, 1, "yellow"];
    } else if (lightType === "spotLight") {
      helper = [spotLightRef, SpotLightHelper, "darkred"];
    } else if (lightType === "rectAreaLight") {
      helper = [null, null, null];
    }
    setHelper(helper);
  }, [lightType]);

  useHelper(...helper);

  return (
    <>
      <OrbitControls makeDefault enablePan={false} maxPolarAngle={1.5} />
      {/*-------------------------------------- CIELO Y ESTRELLAS --------------------------------------*/}
      <Sky
        distance={45000}
        sunPosition={[1, -0.05, 1.2]}
        inclination={0}
        azimuth={0.25}
        elevation={1}
        rayleigh={3}
      />
      <Stars factor={1} radius={20} />
      <ambientLight intensity={0.8} />
      {/*----------------------------------------- LUCES -----------------------------------------*/}
      <Light
        type={lightType}
        hemisphereLightRef={hemisphereLightRef}
        pointLightRef={pointLightRef}
        spotLightRef={spotLightRef}
      />

      {/*----------------------------------------- MODELOS -----------------------------------------*/}
      <Object scale={2} position-y={-0.5} />
      <Floor scale={10} />
      <Text scale={0.3} position={[0, -1.4, 1.5]} rotation={[30, 0, 0]} color="#000000">
        {lightType}
      </Text>
    </>
  );
}
