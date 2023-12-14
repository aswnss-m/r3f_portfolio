import { OrbitControls, ContactShadows } from "@react-three/drei";
import { useControls } from "leva"
import { Model } from "../BaseModel";
export const Experience = () => {
  // const { animation } = useControls({
  //   animation: {
  //     value: 'idle',
  //     options: ['idle', 'greeting', 'pointing', 'onPhone']
  //   }
  // })
  return (
    <>
      <group position-y={-1.5}>
        <ContactShadows opacity={0.3} scale={20} far={10} resolution={256} blur={1} />
          <Model animation={"idle"} />
      </group>
      <ambientLight intensity={2} />
    </>
  );
};
