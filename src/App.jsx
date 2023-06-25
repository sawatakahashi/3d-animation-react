import "./App.css";
import {
  OrbitControls,
  PresentationControls,
  useGLTF,
  Float,
  Text,
  ContactShadows,
  Html,
} from "@react-three/drei";
import { Canvas } from "react-three-fiber";

function App() {
  const macbook = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  const dack = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/duck/model.gltf"
  );
  const tree = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-lime/model.gltf"
  );
  return (
    <div>
      <Canvas camera={{ fov: 45, near: 0.1, far: 2000, position: [0, 1.5, 6] }}>
        <color args={["#66cc99"]} attach="background" />
        {/* <OrbitControls /> */}
        <ambientLight />
        <directionalLight intensity={1.4} />
        {/* <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh> */}
        <PresentationControls
          global
          config={{ mass: 4, tension: 400 }}
          snap={{ mass: 4, tension: 300 }}
        >
          <Float rotationIntensiity={1}>
            <rectAreaLight
              color={"#0021a7"}
              intensity={55}
              rotation={[0.1, Math.PI, 0]}
              width={2.0}
              height={1.65}
              position={[0, 0, -1]}
            />
            <primitive
              object={macbook.scene}
              position={[0, -1.5, 0]}
              // scale={[0.9, 0.9, 0.9]}
            >
              <Html
                position={[0, 1.5, -1.5]}
                distanceFactor={1.17}
                rotation-x={-0.256}
                transform
                wrapperClass="htmlScreen"
              >
                <iframe
                  src="https://sawaportfolio.vercel.app/"
                  frameBorder="0"
                ></iframe>
              </Html>
            </primitive>
          </Float>
          <Float rotationIntensiity={1}>
            <rectAreaLight
              color={"#0021a7"}
              intensity={55}
              rotation={[0.1, Math.PI, 0]}
              width={2.0}
              height={1.65}
              position={[0, 0, -1]}
            />
            <primitive
              object={dack.scene}
              position={[-2.4, -1, 0.2]}
              scale={[0.3, 0.3, 0.3]}
            ></primitive>
          </Float>
          <Float rotationIntensiity={1}>
            <rectAreaLight
              color={"#0021a7"}
              intensity={55}
              rotation={[0.1, Math.PI, 0]}
              width={2.0}
              height={1.65}
              position={[0, 0, -1]}
            />
            <primitive
              object={tree.scene}
              position={[2.5, -1.2, -0.2]}
              scale={[0.05, 0.05, 0.05]}
            ></primitive>
          </Float>

          <Text fontSize={0.6} position={[0, 1.4, 1]}>
            React-Three-Fiber
          </Text>
        </PresentationControls>

        <ContactShadows scale={7} blur={2.4} opacity={0.7} position-y={-2.0} />
      </Canvas>
    </div>
  );
}

export default App;
