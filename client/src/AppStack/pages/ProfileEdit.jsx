import React, { useState } from "react";
import ModalEdit from "../Widgets/ModalEdit";
import { useDispatch } from "react-redux";
import { editUser, logout } from "../../Redux/UserSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProfilePageEdit({ user, setUser }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const cld = new Cloudinary({cloud: {cloudName: 'diuz8zjyo'}});
  // Use the user prop directly instead of copying it to updateForm
  // This ensures that the form is always in sync with the user data
  const [updateForm, setUpdateForm] = useState(user);

  async function handleUpdate(e) {
    e.preventDefault();

    if (
      updateForm.resume.slice(-3) === "pdf" ||
      updateForm.resume.slice(-3) === "doc" ||
      updateForm.resume.slice(-4) === "docx"
    ) {
      console.log("SOLID RESUME");
    }
    if (
      updateForm.profileImage.slice(-3) === "jpeg" ||
      updateForm.profileImage.slice(-3) === "png" ||
      updateForm.profileImage.slice(-3) === "jpg"
    ) {
      console.log("SOLID IMAGE");
      let type = updateForm.profileImage.slice(-3);
    }

    console.log(updateForm);
    // Use the user.id from the updateForm object
    // https://fp-server-ox4k.onrender.com
    const response = await axios.put(
      `https://fp-server-ox4k.onrender.com/cp/profile/edit/${updateForm.id}`,
      updateForm
    );
    // console.log(response.data.message);
    setUser(response.data.message);
    navigate(`/profile/${updateForm.id}`);
  }

  function editChange(id, value) {
    setUpdateForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  }

  return (
    <div className="flex flex-col items-center justify-center mt-44">
      <h1 className="text-4xl">
        Hello <strong>{updateForm.firstName}</strong>!
      </h1>
      <div className="rounded-xl flex flex-col justify-center">
        <>{console.log(updateForm.resume, typeof updateForm.resume)}</>
        {Object.keys(updateForm).map((d, index) => (
          <div key={d} className="flex justify-evenly m-10">
            {d === "resume" || d === "profileImage" ? (
              <ModalEdit
                type="file"
                maxFileSize={2048}
                id={d}
                data={updateForm[d]}
                editChange={editChange}
              />
            ) : d !== "iat" && d !== "exp" ? (
              <ModalEdit
                type="text"
                id={d}
                data={updateForm[d]}
                editChange={editChange}
              />
            ) : null}
          </div>
        ))}
      </div>
      <form onSubmit={handleUpdate}>
        <button className="text-center btn btn-primary mb-20 -mt-20" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default ProfilePageEdit;
