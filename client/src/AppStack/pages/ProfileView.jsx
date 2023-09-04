import React from 'react'
import { useNavigate,useLocation } from "react-router-dom";
import ModalImage from '../Widgets/ModalImage';
import { ProfileCard } from '../Widgets/ProfileImage';

function ProfileView(props) {
    
    const navigate = useNavigate()
    const location = useLocation();
    const { user } = location.state;
  return (
    <div className='flex'>
        {console.log(user)}
        <div className='bg-different w-1/4 h-full bg-no-repeat bg-cover'></div>
    <div className='w-1/2 flex flex-col items-center h-full '>
    <div className=' h-screen w-full items-center text-center bg-orange-300 bg-opacity-30 rounded-xl '>
        <ProfileCard user={{name:user.firstName,image:user.image,email:user.email,github:user.github,linkedIn:user.linkedIn, type:user.type, course:user.course}}/>
        <div className='flex flex-col text-center'>
                
                <ModalImage resume={user.resume}/>
                <div className='mt-10 text-center bg-yellow-300 rounded-lg mb-10'>
            <h1 className='mb-14'>About:</h1>
            <p className='mb-14 '>{user.about}</p>
        </div>
        </div>
       
        
        <button className='mb-14 btn btn-primary' onClick={()=> navigate(-1)}>Back</button>
        </div>
    </div>
    <div className='bg-different w-1/4 h-full'></div>
    </div>
  )
}

export default ProfileView