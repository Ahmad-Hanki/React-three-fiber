import { Canvas } from "@react-three/fiber";
import "./App.css";

//mesh renders any 3d objects
//mesh needs geometry
const Cube = ({ position, size, color }) => {
  return (
    <mesh position={position}>
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
      <group position={[0,-1,0]}>
        <Cube position={[1, 0, 0]} color={"green"} size={[1, 1, 1]} />
        <Cube position={[-1, 0, 0]} color={"pink"} size={[1, 1, 1]} />
        <Cube position={[1, 2, 0]} color={"hotpink"} size={[1, 1, 1]} />
        <Cube position={[-1, 2, 0]} color={"lightblue"} size={[1, 1, 1]} />
      </group>
    </Canvas>
  );
}

export default App;
