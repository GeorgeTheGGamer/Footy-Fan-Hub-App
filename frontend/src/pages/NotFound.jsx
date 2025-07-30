import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
 const navigate = useNavigate()

 return (
   <div className="bg-gradient-to-t from-sky-500 to-indigo-500 h-screen flex flex-col justify-center items-center text-center px-4">
     <div className="max-w-2xl">
       <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold bg-gradient-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent mb-4">
         404
       </h1>
       <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
         Page Not Found
       </h2>
       <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-xl mx-auto">
         The page you are looking for doesn't exist or has been moved.
       </p>
       <button 
         onClick={() => navigate(-1)}
         className="bg-gradient-to-bl from-violet-500 to-fuchsia-500 px-8 py-4 text-xl rounded-lg text-white font-semibold ease-in-out hover:bg-gradient-to-bl hover:from-emerald-500 hover:to-teal-500 hover:-translate-y-1 hover:shadow-xl cursor-pointer mr-4"
       >
         Go Back
       </button>
       <button 
         onClick={() => navigate('/')}
         className="bg-white/20 backdrop-blur-sm px-8 py-4 text-xl rounded-lg text-white font-semibold border border-white/30 transition-all duration-300 ease-in-out hover:bg-white/30 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
       >
         Home
       </button>
     </div>
   </div>
 )
}

export default NotFound