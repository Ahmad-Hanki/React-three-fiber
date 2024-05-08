import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { useRef } from "react";

//mesh renders any 3d objects
//mesh needs geometry

const Cube = ({ position, size, color }) => {
  const ref = useRef();

  useFrame((state, delta) => {
    // delta is the deference time between last and current frame
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2;
    ref.current.position.z = Math.sin(state.clock.elapsedTime) *2;
  });

  return (
    <mesh position={position} ref={ref}>
      {" "}
      {/*everything in our mesh is for the box */}
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
function App() {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} intensity={0.5} />

      <ambientLight intensity={0.1} />
      {/* <group position={[0,-1,0]}>
        <Cube position={[1, 0, 0]} color={"green"} size={[1, 1, 1]} />
        <Cube position={[-1, 0, 0]} color={"pink"} size={[1, 1, 1]} />
        <Cube position={[1, 2, 0]} color={"hotpink"} size={[1, 1, 1]} />
        <Cube position={[-1, 2, 0]} color={"lightblue"} size={[1, 1, 1]} />
      </group> */}

      <Cube position={[0, 0, 0]} color={"lightblue"} size={[1, 1, 1]} />
    </Canvas>
  );
}

export default App;
