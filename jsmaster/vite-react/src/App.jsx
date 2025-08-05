import React from 'react';
import { useRef } from 'react';
import {OrbitControls, Sparkles} from '@react-three/drei';
import {Canvas, useFrame} from "@react-three/fiber";

const RotatingCylinder = () => {
  const meshRef = useRef();
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  })


  return(
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1] } />
      <meshLambertMaterial color="#468565" emissive="#468565"/>
      
      <Sparkles count={100} scale={1} size={6} speed={0.002} noise={0.2} color={"orange"}/>
    </mesh>
  )
}

const App = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <OrbitControls  enableZoom = {true} enablePan = {true} enableRotate/> {/* all of these declares true eplicitly and in inexplicitly */}
      <directionalLight position={[1, 1, 1]} intensity={0.8}/>
      <color attach="background" args={['#F0F0F0']}/>{/* This is the background color of the scene/ canvas */}

      <RotatingCylinder/>
      
    </Canvas>
  )
} 

{/*because we imported canva and working with in it we, dont have to import all the other components
  and such as Cylinder Geometry, meshLambertMAterial and ect. go loo at the documentation on the 
  'React Three Fiber.docs' 
*/}

export default App;