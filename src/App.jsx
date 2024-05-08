import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { useRef } from "react";

//mesh renders any 3d objects
//mesh needs geometry

const Tours = ({ position, args, color }) => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2;
    ref.current.position.z = Math.sin(state.clock.elapsedTime);
  });
  return (
    <mesh position={position} ref={ref}>
      <torusGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
const ToursKNot = ({ position, args, color }) => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2;
    ref.current.position.z = Math.sin(state.clock.elapsedTime);
  });
  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Sphere = ({ position, size, color }) => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2;
    ref.current.position.z = Math.sin(state.clock.elapsedTime);
  });
  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry args={size} />
      <meshStandardMaterial color={color} wireframe/>
    </mesh>
  );
};

const Cube = ({ position, size, color }) => {
  const ref = useRef();

  useFrame((state, delta) => {
    // delta is the deference time between last and current frame
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2;
    ref.current.position.z = Math.sin(state.clock.elapsedTime);
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

      <Cube position={[2, 0, 0]} color={"lightblue"} size={[1, 1, 1]} />
      <Sphere position={[0, 0, 0]} color={"lightblue"} size={[1, 30, 30]} />
      <Tours
        position={[-2, 0, 0]}
        color={"lightblue"}
        args={[0.8, 0.1, 30, 30]}
      />
      <ToursKNot
        position={[0, 2, 0]}
        color={"lightblue"}
        args={[0.5, 0.1, 1000, 50]}
      />
    </Canvas>
  );
}

export default App;
