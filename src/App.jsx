import { Canvas } from "@react-three/fiber";
import "./App.css";

//mesh renders any 3d objects
//mesh needs geometry

function App() {
  return (
    <Canvas>
      <directionalLight position={[0,0,2]}/>

     < mesh>  {/*everything in our mesh is for the box */}
        <boxGeometry args={[2, 2, 4]} /> {/* x y z */}
        <meshStandardMaterial color={"orange"} />
      </mesh>
    </Canvas>
  );
}

export default App;
