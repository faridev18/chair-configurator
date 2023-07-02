import {
  Backdrop,
  BakeShadows,
  Float,
  MeshReflectorMaterial,
  OrbitControls,
  PresentationControls,
  Stage,
  useGLTF,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Chair from "./Chair";
// import Shoe from "./Shoe";

const Experience = () => {
  return (
    <>
    <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
    <ambientLight intensity={0.1} />
      <PresentationControls
        speed={3}
        global
        polar={[-0.1, Math.PI / 4]}
        rotation={[Math.PI / 8, Math.PI / 4, 0]}
      >
        <Stage environment="" intensity={0.6} castShadow={false}>
          <Chair scale={1} />
        </Stage>
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[170, 170]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={40}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#101010"
            metalness={0.5}
          />
        </mesh>
      </PresentationControls>
    </>
  );
};

export default Experience;
