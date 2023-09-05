import React, { useState } from 'react';
import ModalEdit from '../Widgets/ModalEdit';
import { useDispatch } from 'react-redux';
import { editUser, logout } from '../../Redux/UserSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProfilePageEdit({ user, setUser }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [updateForm, setUpdateForm] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    type: user.type,
    profileImage: user.profileImage,
    resume: user.resume,
    course: user.course,
    about: user.about,
    github: user.github,
    linkedIn: user.linkedIn,
  });

  async function handleUpdate(e) {
    e.preventDefault();
    console.log(user);
    let response = await axios.put(`https://fp-server-ox4k.onrender.com/cp/profile/edit/${user.id}`, updateForm);
    setUser(response.data.message)
    navigate(`/profile/${user.id}`)
  }

  function editChange(id, value) {
    setUpdateForm({ ...updateForm, [id]: value });
  }

  return (
    <div className="flex flex-col items-center justify-center mt-44 ">
      <h1 className='text-4xl '>Hello <strong>{updateForm.firstName}</strong>!</h1>
      <div className="rounded-xl flex flex-wrap justify-center">
        {Object.keys(updateForm).map((d,index) => (
            <div key={d} className='flex justify-evenly m-10'>
            
            {d === 'resume' || d === 'profileImage' ? (
              <ModalEdit type={'file'} data-max-size="2048" id={d} data={updateForm[d]} editChange={editChange} />
            ) : (
              <ModalEdit type={'text'} id={d} data={updateForm[d]} editChange={editChange} />
            )}
            </div>
          
        ))}
      </div>
      <form onSubmit={handleUpdate}>
        <button className="text-center btn btn-primary" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default ProfilePageEdit;
