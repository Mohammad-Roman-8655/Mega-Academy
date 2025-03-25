import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



function Register() {
    const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [isRegisterSuccess,setIsRegisterSuccess]=useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    try {
      const res = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Registration successful. You can now login.");
        
        if(confirm('Are you sure you want to register on Mega Academy?')==true){
            alert("Congratulations,Now you are successfully registered on Mega Academy.");
            navigate('/login');
            
        }else{
            
            navigate('/');
        }
        
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Registration failed");
    }
  };

  return (
    
    <div className="mt-[5%] bg-gray-100 flex items-center justify-center ">
     <div className="bg-white border-2  border-black rounded-lg p-8 max-w-md w-full bg-gradient-to-r from-sky-600 to-blue-800 shadow-2xl">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Register</h2>
        {error && <p className="text-red-500">{error}</p>}
        {message && <p className="text-green-500">{message}</p>}
        <form className="space-y-4 " onSubmit={handleRegister}>
        <div>
               <label className="block text-sm font-medium text-white ">Full Name</label>
               <input
                 type="text"
                 className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                 placeholder="John Doe"
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
               />
             </div>
             <div>
            <label className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
              value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
       <div>
            <label className="block text-sm font-medium text-white">Password</label>
            <input
              type="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        
          <button type="submit"  className="w-full py-2 px-4 bg-gradient-to-r from-sky-600 to-blue-800 border-2 border-white font-bold text-xl  text-white rounded-lg transition duration-300">
            Register
          </button>
        </form>
      </div>
    </div>
  );

}

export default Register;
