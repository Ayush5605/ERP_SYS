import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useUser} from "../context/UserContext.jsx";
import { School } from "lucide-react";
import {motion} from "framer-motion";


import{
    Card,
    
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card.jsx";
import {Button} from "../components/ui/button.jsx";
import { Label } from "../components/ui/label.jsx";
import { Input } from "../components/ui/input.jsx";

export default function Login(){
    const{setUser}=useUser();
    const navigate=useNavigate();

    const [role,setRole]=useState("TEACHER");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const handleLogin=(e)=>{
        e.preventDefault();


        if(!email || !password){
            alert("Please fill the required fields");
            return;
        }

        setUser({
            name:email.split("@")[0],
            role,
        });

        navigate(`/${role.toLowerCase()}/dashboard`);

    };


    
 return (
  <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-500 via-blue-300 to-blue-100 px-4">
    
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card
        className="
          w-full 
          max-w-xl 
          lg:max-w-2xl 
          rounded-3xl 
          border border-blue-200/60 
          bg-white/80 backdrop-blur-xl 
          shadow-[0_30px_60px_rgba(37,99,235,0.25)]
          transition-transform duration-300
          hover:-translate-y-1
        "
      >
        
        {/* Header */}
        <CardHeader className="text-center space-y-4 pb-6">
          <div className="flex justify-center">
            <div className="h-16 w-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg">
              <School size={32} />
            </div>
          </div>

          <CardTitle className="text-4xl font-bold text-blue-700">
            Welcome
          </CardTitle>

         
        </CardHeader>

        {/* Form */}
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-2 px-14">

            {/* Role */}
            <div className="space-y-2">
              <Label className="text-md font-medium text-blue-700">
                Select Role
              </Label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="
                  w-full h-12 rounded-lg 
                  border border-blue-300 
                  bg-white px-4 text-base
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                "
              >
                <option value="ADMIN">Admin</option>
                <option value="TEACHER">Teacher</option>
                <option value="STUDENT">Student</option>
              </select>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <Label className="text-sm font-medium text-blue-700">
                Email Address
              </Label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 w-full px-4 text-base focus-visible:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div className="space-y-1">
              <Label className="text-sm font-medium text-blue-700">
                Password
              </Label>
              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 w-full px-4 text-base focus-visible:ring-blue-500"
              />
            </div>

          </CardContent>

          {/* Footer */}
          <CardFooter className="px-14 pt-2 pb-10">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="w-full"
            >
              <Button
                type="submit"
                className="
                  w-full h-12 text-lg font-semibold 
                  bg-gradient-to-r from-blue-600 to-indigo-600 
                  hover:from-blue-700 hover:to-indigo-700 
                  text-white rounded-xl 
                  shadow-lg hover:shadow-xl 
                  transition-all
                "
              >
                Sign In
              </Button>
            </motion.div>
          </CardFooter>
        </form>

      </Card>
    </motion.div>
  </div>
);

}