import React, { useState } from 'react'
import ModalEdit from '../Widgets/ModalEdit'

function ProfilePage({user}) {
    const [updateForm,setUpdateForm] = useState({

    })
    console.log(user)
  return (
    <div>
        <div>
            <h1>Hello {user.firstName}!</h1>
            <p>Please complete filling out you profile!</p>
            <form>
                <div>
                    <label>First Name</label>
                    <ModalEdit type={'text'} data={user.firstName}/>
                </div>
                
                
                
            </form>
        </div>



    </div>
  )
}

export default ProfilePage