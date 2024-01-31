import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";
import "./index.css"
function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center ">
      <h1 className="bg-white rounded-lg font-bold  text-center mt-[40px] py-2 px-10 text-4xl w-11/12">RANDOM GIFS</h1>
      <div>
        <Random />
        <Tag />
      </div>
      App
    </div>
  );
}

export default App;
