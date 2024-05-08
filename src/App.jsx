import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { useRef, useState } from "react";
import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";

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

  // useFrame((state, delta) => {
  //   ref.current.rotation.x += delta;
  //   ref.current.rotation.y += delta * 2;
  //   ref.current.position.z = Math.sin(state.clock.elapsedTime);
  // });
  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={args} />
      {/* <meshStandardMaterial color={color} /> */}
      <MeshWobbleMaterial factor={5} speed={2}/>

    </mesh>
  );
};

const Sphere = ({ position, size, color }) => {
  const ref = useRef();

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useFrame((state, delta) => {
    ref.current.rotation.y = isHovered
      ? (ref.current.rotation.y += delta * 1.2)
      : (ref.current.rotation.y += delta * 0.2);
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 0.2;
  });
  return (
    <mesh
      scale={isClicked ? 3 : 1}
      position={position}
      ref={ref}
      onPointerEnter={(event) => {
        event.stopPropagation(); // make sure that when the mouse is inside the mesh the event is just contained in the mesh
        setIsHovered(true);
      }}
      onPointerLeave={(event) => {
        setIsHovered(false);
      }}
      onClick={() => setIsClicked((prev) => !prev)}
    >
      <sphereGeometry args={size} />
      <meshStandardMaterial color={isHovered ? color : "pink"} wireframe />
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

      {/* <Cube position={[2, 0, 0]} color={"lightblue"} size={[1, 1, 1]} /> */}
      {/* <Sphere position={[0, 0, 0]} color={"lightblue"} size={[1, 30, 30]} /> */}
      {/* <Tours
        position={[-2, 0, 0]}
        color={"lightblue"}
        args={[0.8, 0.1, 30, 30]}
      />
      */}
      <ToursKNot
        position={[0, 0, 0]}
        color={"lightblue"}
        args={[0.5, 0.1, 1000, 50]}
      />
       <OrbitControls enableZoom={false} />  {/* Rotate around*/}
    </Canvas>
  );
}

export default App;
