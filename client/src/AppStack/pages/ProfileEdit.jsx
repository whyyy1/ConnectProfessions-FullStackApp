import React, { useState } from 'react'
import ModalEdit from '../Widgets/ModalEdit'
import { useDispatch } from "react-redux";
import { editUser } from '../../Redux/UserSlice';

function ProfilePageEdit({user}) {
    const dispatch = useDispatch()
    const [updateForm,setUpdateForm] = useState({
        firstName: user.firstName,
        lastName:user.lastName,
        email:user.email,
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
        dispatch({type:'editUser',payload:{form:updateForm,id:user.id}})
        
        // navigate(`/loading`)
        // // Force a page reload
        // window.location.reload();
      }
    
    
      function editChange(id, value) {

        setUpdateForm({ ...updateForm, [id]: value });
      }

  return (
    <div>
        <div>
            <h1>Hello {user.firstName}!</h1>
            <p>Please complete filling out you profile!</p>
            
                {Object.keys(updateForm).map((d)=>{
                    console.log(user[d])
                    return(
                    <div key={d} className='flex  justify-between'>
                        <div className='flex flex-col'><label>{d}</label>
                    <p>{updateForm[d]}</p></div>
                    
                    {d==='resume'?<ModalEdit type={'file'} id={d} data={updateForm[d]} editChange={editChange}/>:
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