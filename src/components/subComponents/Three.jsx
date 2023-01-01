import React, { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function Three(props) {
  const mesh = useRef();

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useFrame((state, delta) => {
    if (props.moveValue === "move left") mesh.current.rotation.y -= delta;
    else if (props.moveValue === "move right") mesh.current.rotation.y += delta;
    else if (props.moveValue === "stop") mesh.current.rotation = 0;
    else {
      setErrorMessage("no moveValue");
    }
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxGeometry args={[4, 2, 3]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}
