import React from 'react'
import { useTexture } from '@react-three/drei';
import { DoubleSide } from 'three';

const Door = ({position}) => {
    const path = "/static/textures/door/";
    const props = useTexture({
        map: path + "color.jpg",
        displacementMap: path + "height.png",
        normalMap: path + "normal.jpg",
        roughnessMap: path + "roughness.jpg",
        aoMap: path + "ao.jpg",
        metalnessMap: path + "metallic.jpg"
    })

    return (
        <mesh castShadow position={position} >
            <planeGeometry args={[2, 5]} />
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}

export default Door