import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef, useState } from "react";
import HomeInfo from "../components/HomeInfo";
import Loader from "../components/Loader";
import Bird from "../models/Bird";
import Island from "../models/Island";
import Plane from "../models/Plane";
import Sky from "../models/Sky";

import { soundoff, soundon } from "../assets/icons";
import sakura from "../assets/sakura.mp3";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(true);

  // AUDIO
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.6;
  audioRef.current.loop = true;

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const [islandScale, islandPosition] = adjustIslandForScreenSize();
  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex justify-center items-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          {/* LIGHT START ========================================= */}
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          {/* LIGHT END ========================================= */}
          <Bird />
          <Sky isRotating={isRotating} />
          {/* ISLAND START ========================================= */}
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          {/* PLANE START ========================================= */}
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer object-contain"
        />
      </div>
    </section>
  );
};

export default Home;
