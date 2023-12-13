import { OrbitControls,ContactShadows } from "@react-three/drei";
import { Model } from "../BaseModel";
export const Experience = () => {
  return (
    <>
      {/* <OrbitControls /> */}
      <group position-y={-1.5}>
        <ContactShadows opacity={0.3} scale={20} far={10} resolution={256} blur={1}/>
        <Model animation="pointing"/>
      </group>
      <ambientLight intensity={2} />
    </>
  );
};
