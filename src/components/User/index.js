"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Moon";
const User = () => {
  return (
    <div className={`user`}>
      <div className="circle_on">
        <div className="card c1">
          <div className="title_card">frontend developer</div>
          <div className="text">
            lorem ipsum is simply dummy text of the printing
          </div>

          <div className="line"></div>
        </div>

        <div className="card c2">
          <div className="title_card">frontend developer</div>
          <div className="text">
            lorem ipsum is simply dummy text of the printing
          </div>
          <div className="line"></div>
        </div>
        <div className="circle">
          <Canvas
            camera={{ position: [0, 0, 470], fov: 15 }}
            style={{
              width: "100%",
              height: "100%"
            }}
          >
            <ambientLight intensity={5.25} />
            <ambientLight intensity={0.5} />
            <directionalLight intensity={10.4} />
            <Suspense fallback={"Loading..."}>
              <Model position={[0, 0, 0]} />
            </Suspense>
            <OrbitControls autoRotate enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default User;
