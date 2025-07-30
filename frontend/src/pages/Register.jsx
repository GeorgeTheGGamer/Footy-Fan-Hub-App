import React from 'react'
import { useNavigate } from 'react-router-dom'
import Form from '../components/Form'

const Register = () => {

 const navigate = useNavigate()

 return (
   <div>
     <div className="absolute top-4 left-4 flex gap-4 z-10">
       <button 
         onClick={() => navigate('/login')}
         className="bg-gradient-to-bl from-violet-500 to-fuchsia-500 px-6 py-3 text-lg rounded-lg text-white font-medium ease-in-out hover:bg-gradient-to-bl hover:from-emerald-500 hover:to-teal-500 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
       >
         Login
       </button>
       <button 
         onClick={() => navigate('/')}
         className="bg-white/20 backdrop-blur-sm px-6 py-3 text-lg rounded-lg text-white font-medium border border-white/30 ease-in-out hover:bg-white/30 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
       >
         Homepage
       </button>
     </div>
     <Form route="/api/user/register/" method="register"></Form>
   </div>
 )
}

export default Register