import { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";

function App() {
  
  let [val,setVal] = useState(false)
  return (
    <>
      
      <div className="bg-zinc-200 w-full h-screen flex justify-center items-center">
        <div className="relative  bg-zinc-500 w-80 h-40 rounded-md flex overflow-hidden">
          <img className= {`shrink-0 transition-transform duration-700  ease-out ${val===false? "-translate-x-[0%]" : "-translate-x-[100%]"} object-cover w-full h-full `}
            src="https://images.unsplash.com/photo-1723375381591-9d2a5e975704?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
            alt=""/>
          <img className={`shrink-0 transition-transform duration-700 ease-out ${val===false? "-translate-x-[0%]" : "-translate-x-[100%]"} object-cover w-full h-full `}
            src="https://images.unsplash.com/photo-1723375381394-bac93b15c276?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"
            alt=""/>
          <span  onClick={()=>setVal(()=>!val)}  className="absolute w-8 h-8 bg-[#dadada6b] flex justify-center items-center left-1/2 bottom-[0%] -translate-x-[50%] -translate-y-[50%] rounded-full">
            <FaArrowRight size={".9em"}/>
          </span>
        </div>
      </div>

    </>
  )
}

export default App
