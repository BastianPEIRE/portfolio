"use client";

import Threejs from "./threejs/threejs.tsx"

export default function profile() {

  return (
    <div className="w-80 flex flex-col gap-3 items-center">
      <div className="bg-black border border-white w-64 h-96 rounded flex flex-col">
        <div id="threejs" className="w-full h-full bg-red-500">
          <Threejs></Threejs>
        </div>
        <div className="h-24 flex flex-col justify-center items-center text-white">
          <h2 className="text-center">Bastian PEIRE</h2>
          <p className="text-base text-center italic font-extralight">DevOps</p>
        </div>
      </div>
      <p className="text-center text-white">
        I'm an IT student on a journey of exploration and learning. Dive into my
        portfolio to discover the world of technology through my projects and
        experiences. Let's connect and explore the possibilities!
      </p>
    </div>
  );
}