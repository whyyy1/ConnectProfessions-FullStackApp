import React, { useState } from 'react'
import ModalEdit from '../Widgets/ModalEdit'
import { useDispatch } from "react-redux";
import { editUser, logout } from '../../Redux/UserSlice';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function ProfilePageEdit({user,setUser}) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [updateForm,setUpdateForm] = useState({
        firstName: user.firstName,
        lastName:user.lastName,
        email:user.email,
        type:user.type,
        profileImage: user.profileImage,
        resume:user.resume,
        course:user.course,
        about: user.about,
        github:user.github,
        linkedIn:user.linkedIn,



    })
    console.log(user)

    async function handleUpdate(e) {
        e.preventDefault()
        console.log(updateForm);
        await axios.put(`http://localhost:5000/cp/profile/edit/${user.id}`,updateForm)
        // setUser(updateForm)
        // dispatch(logout())
      }
    
    
      function editChange(id, value) {

        setUpdateForm({ ...updateForm, [id]: value });
      }

  return (
    <div>
        <div className='flex flex-col text-center'>
            <h1>Hello {user.firstName}!</h1>
            <p>Please complete filling out you profile!</p>
            
                {Object.keys(updateForm).map((d)=>{
                    
                    return(
                    <div key={d} className='flex  justify-between'>
                        <div className='flex flex-col'><label>{d}</label>
                    <p>{updateForm[d]}</p></div>
                    
                    {d==='resume' || d==='profileImage'?<ModalEdit type={'file'} data-max-size="2048"  id={d} data={updateForm[d]} editChange={editChange}/>:
                    <ModalEdit type={'text'} id={d} data={updateForm[d]} editChange={editChange}/>}
                </div>
                    )
                })}
                <form onSubmit={handleUpdate}>
                <button type='submit'> Save</button>
                
                
                
            </form>
        </div>



    </div>
  )
}

export default ProfilePageEdit