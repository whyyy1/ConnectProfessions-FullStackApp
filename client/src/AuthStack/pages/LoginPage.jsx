import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import sideImage from '../../../public/fzUl.gif?url'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { login } from "../../Redux/UserSlice";

function LoginPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loginForm, setForm] = useState({

        email: "",
        password: '',
        type: "login"
    
      })


      const handleLogin = async (e) => {
        e.preventDefault()
        // Simulating a login process
        if(loginForm.email !== "" && loginForm.password){
            try{
                const loginData = await axios.post(`${process.env.SERVER}/cp/login`,loginForm)
                console.log(loginData.data)
                dispatch(login(loginData.data.message))
                navigate(`/home/${loginData.data.id}`)
            }
            catch(e){
                console.log(e)
            }
            
        }else{
            alert('Enter creditenals!')
        }
       
    
          
            
          }
        
      

      function handleChange(event) {


        setForm({ ...loginForm, [event.target.id]: event.target.value })
      }
  return (
    
    <div className="flex flex-wrap justify-evenly bg-slate-900">
        <img src={sideImage} className="w-1/3 p-4"/>
        <Card color="white" shadow={false} className=" h-screen text-center bg-violet-500 w-1/3 rounded-xl items-center justify-center">
            <div className="mt-10">
            <Typography variant="h4" className="text-5xl" >
            Connect Professions
        </Typography>
        {/* <Typography variant="h4" color="blue-gray">
            Login In
        </Typography> */}
        <Typography  className="mt-1 font-bold text-yellow-400">
            Login in user to acces your account.
        </Typography>
        </div>
        <form onSubmit={handleLogin} className="   flex flex-col justify-center  h-1/2 items-center rounded-xl">
            <div className=" flex flex-col gap-16 p-10 text-2xl mt-20">
            
            <Input   label="Email" id="email" value={loginForm.email} onChange={handleChange} className="bg-white hover:bg-opacity-60" />
            <Input type="password" label="Password" id="password" value={loginForm.password} onChange={handleChange} className="bg-white  hover:bg-opacity-60"  />
            </div>
            <div className="m-5">
            
            </div>
            <Checkbox
            className="bg-white"
            label={
                
                <Typography
                variant="small"
                color="black"
                className="bg-whiteflex items-center font-bold text-xl"
                >
                Remember Me
                </Typography>
            }
            
            />
            <Button type="submit" className="m-10 hover:bg-black text-lg p-5 rounded-lg" >
            Login
            </Button>
            <Typography color="black" className="mt-4 text-center font-bold">
            Dont have an account?{" "}
            <a href="/register" className="font-medium text-xl hover:text-yellow-400">
                <strong>Sign Up</strong>
            </a>
            </Typography>
        </form>
        </Card>
        
    </div>
  )
}

export default LoginPage