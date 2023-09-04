import React from 'react'
import { useNavigate } from "react-router-dom";
import ModalImage from '../Widgets/ModalImage';
import { ProfileCard } from '../Widgets/ProfileImage';

function Profile({user}) {
    const navigate = useNavigate()
  return (
    <div className='flex'>
        <div className='bg-different w-1/4 h-full'></div>
    <div className='w-1/2 flex flex-col items-center h-full '>
    <div className=' h-screen w-full items-center text-center bg-orange-300 rounded-xl '>
        <ProfileCard user={{name:user.firstName,image:user.image,email:user.email,github:user.github,linkedIn:user.linkedIn, type:user.type, course:user.course}}/>
        <div className='flex flex-col text-center'>
                
                <ModalImage resume={user.resume}/>
                <div className='mt-10 text-center bg-yellow-300 rounded-lg mb-10'>
            <h1 className='mb-14'>About:</h1>
            <p className='mb-14 '>{user.about}</p>
        </div>
        </div>
       
        
        <div className='flex justify-evenly'>
            <button className='mb-14 btn btn-primary' onClick={()=> navigate(`/profile/edit/${user.id}`)}>Edit</button>
            <button className='mb-14 btn btn-error' onClick={()=> console.log('delete')}>Delete</button>
        </div>
        
        {console.log(user)}
        </div>
    </div>
    <div className='bg-different w-1/4 h-full'></div>
    </div>
  )
}

export default Profile