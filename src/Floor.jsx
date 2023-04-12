import React from 'react'

const Floor = ({scale}) => {
    return (
        <mesh receiveShadow position-y={-1.5} rotation-x={-Math.PI * 0.5} scale={scale}>
            <planeGeometry args={[8, 8]}></planeGeometry>
            <meshStandardMaterial color={"gray"} />
        </mesh>
    )
}

export default Floor