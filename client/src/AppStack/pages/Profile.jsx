import React from 'react'
import { useNavigate } from "react-router-dom";
function Profile({user}) {
    const navigate = useNavigate()
  return (
    <div>Profile
        <h1>Hello {user.firstName}!</h1>
        <div>
            <h1>Links</h1>
            <h1>Email: {user.email}</h1>
            <h1>Github: {user.github}</h1>
            <h1>LinkedIn: {user.linkedIn}</h1>
        </div>
        <h1>{user.type}</h1>
        <h1>{user.course} Course </h1>
        <h1>About:</h1>
        <p>{user.about}</p>
        <p>{user.resume}RESUME GOES HERE</p>
        <button onClick={()=> navigate(`/profile/edit/${user.id}`)}>Edit</button>
        {console.log(user)}

    </div>
  )
}

export default Profile