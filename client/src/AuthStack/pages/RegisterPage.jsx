import React, { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { userInfo,signUp } from "../../Redux/UserSlice";
import { useNavigate } from "react-router-dom";
import sideImage from '../../../public/QHG.gif?url'
import axios from "axios";

function RegisterForm() {
  const [currentOption, setCurrentOption] = useState(null);
  const [regForm, setRegForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    type: "",
    resume:"",
    course:"",
    about:'',
    github:'',
    linkedIn:'',
    

  });

  const options = ["TECH", "BUSINESS"];
  const dispatch = useDispatch()
  const navigate = useNavigate()


  async function handleRegister(e) {
    e.preventDefault()
    console.log(regForm);
    try{
      const response = await axios.post(`https://fp-server-ox4k.onrender.com/cp/register`, regForm);
    console.log(response.data)
    dispatch(signUp(response.data.message))
    
    navigate(`/profile/edit/${response.data.id}`)
    }
    catch(e){
      alert(e.message)
    }
    
  }


  function handleChange(event) {
    if (event.target.id === "type") {
        
        
      setCurrentOption(event.target.value);
      setRegForm({ ...regForm, type: event.target.value })
      
    } else {
      setRegForm({ ...regForm, [event.target.id]: event.target.value });
    }
  }



  return (
    <div className="flex flex-wrap justify-evenly bg-slate-900 h-full">
        <img src={sideImage} className="hidden md:block md:w-1/3 p-4"/>
        <Card color="white" shadow={false} className="md:w-1/3 p-4 text-center items-center bg-blue-300">
        <div className="mt-10">
            <Typography variant="h4" className="text-2xl">
            Connect Professions
            </Typography>
            <Typography variant="h4" color="blue-gray">
            Sign Up
            </Typography>
            <Typography color="purple" className="mt-1 font-bold">
            Enter your details to register. To Begin interacting with the
            Community
            </Typography>
        </div>
        <form
            onSubmit={handleRegister}
            className="w-3/4 bg-activate-8  mt-4 flex flex-col justify-center  h-screen items-center rounded-xl"
        >
            <div className="mb-4 flex flex-col gap-20 p-5 text-4xl">
            <Input
                label="First Name"
                id="firstName"
                value={regForm.firstName}
                onChange={handleChange}
                className="bg-white hover:bg-red-300 "
            />
            <Input
                label="Last Name"
                id="lastName"
                value={regForm.lastName}
                onChange={handleChange}
                className="bg-white  hover:bg-red-300 "
            />
            <Input
                label="Email"
                id="email"
                value={regForm.email}
                onChange={handleChange}
                className="bg-white  hover:bg-red-300 "
            />
            <Input
                type="Password"
                label="Password"
                id="password"
                value={regForm.password}
                onChange={handleChange}
                className="bg-white  hover:bg-red-300 "
            />
            </div>
            <div className="m-5 bg-activate-1 p-1 rounded-md flex items-center ">
            {options.map((option) => {
                return (
                <Checkbox
                key={option}
                    id="type"
                    value={option}
                    onChange={handleChange}
                    checked={currentOption === option}
                    className="bg-white"
                    label={
                    <Typography
                        variant="small"
                        color="black"
                        className="font-bold text"
                    >
                        {option}
                    </Typography>
                    }
                />
                );
            })}
            </div>
            <Checkbox
            className="bg-white"
            label={
                <Typography
                variant="small"
                color="black"
                className="flex items-center font-bold "
                >
                I agree the
                <a href="https://media.tenor.com/xaBwfY2otmkAAAAC/youve-agreed-to-all-of-this-kyle-broflovski.gif" target="_blank"  className="font-bold transition-colors text-activate-Sec hover:text-blue-400">
                    &nbsp;Terms and Conditions
                </a>
                </Typography>
            }
            />
            <Button type='submit'className="m-10 bg-black text-2xl rounded-xl p-5 ">Register</Button>
            <Typography color="gray" className="mt-4 text-center font-bold">
            Already have an account?{" "}
            <a
                onClick={()=>navigate('/login')}
                className="font-medium  hover:text-blue-400"
            >
                <strong>Sign In</strong>
            </a>
            </Typography>
        </form>
        </Card>
        <img src={sideImage} className="md:w-1/3 p-4"/>
    </div>
  );
}

export default RegisterForm;
