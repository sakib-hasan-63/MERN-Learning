import { useState } from "react"

function App() {
  const [color,setColor]= useState("olive");
  return(
<div className="w-full h-screen duration-300" 
style={{backgroundColor:color}}>

{/* 1. TOP NAVBAR */}
      <nav className="fixed top-0 inset-x-0 bg-white/80 backdrop-blur-md border-b border-white/20 shadow-md px-8 py-4 flex justify-between items-center z-50">
        <h1 className="text-2xl font-bold text-gray-800 tracking-wide">
          Background Changer
        </h1>
        <div className="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full border border-gray-300">
          Current: <span className="capitalize text-black">{color}</span>
        </div>
      </nav>


<div className=" fixed flex flex-wrap justify-center bottom-12 px-3 inset-x-0">
  <div className="flex flex-wrap justify-center gap-4 shadow-2xl bg-white px-3 py-2 rounded-3xl">
    <button className="outline-none px-4 py-1 rounded-3xl text-white shadow-2xl" style={{backgroundColor:"red"}} onClick={ () => setColor("red")}>Red</button>

    <button className="outline-none px-4 py-1 rounded-3xl text-white shadow-2xl" style={{backgroundColor:"green"}} onClick={ () => setColor("green")}>Green</button>

    <button className="outline-none px-4 py-1 rounded-3xl text-white shadow-2xl" style={{backgroundColor:"crimson"}} onClick={ () => setColor("crimson")}>Crimson</button>

    <button className="outline-none px-4 py-1 rounded-3xl text-white shadow-2xl" style={{backgroundColor:"pink"}} onClick={ () => setColor("pink")}>Pink</button>

    <button className="outline-none px-4 py-1 rounded-3xl text-white shadow-2xl" style={{backgroundColor:"blue"}} onClick={ () => setColor("blue")}>Blue</button>

    <button className="outline-none px-4 py-1 rounded-3xl text-black shadow-2xl" style={{backgroundColor:"yellow"}} onClick={ () => setColor("yellow")}>Yellow</button>

    <button className="outline-none px-4 py-1 rounded-3xl text-white shadow-2xl" style={{backgroundColor:"black"}} onClick={ () => setColor("black")}>Black</button>
  </div>
</div>
</div>
  )
}

export default App
