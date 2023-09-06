import React, { useState } from "react";
import ModalEdit from "../Widgets/ModalEdit";
import { useDispatch } from "react-redux";
import { editUser, logout } from "../../Redux/UserSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Cloudinary } from "@cloudinary/url-gen";

function ProfilePageEdit({ user, setUser }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const cld = new Cloudinary({cloud: {cloudName: 'diuz8zjyo'}});
  // Use the user prop directly instead of copying it to updateForm
  // This ensures that the form is always in sync with the user data
  const [updateForm, setUpdateForm] = useState(user);
  const cld = new Cloudinary({
    cloud: {
      cloudName: "diuz8zjyo",
      apiKey: "185814167567433",
      apiSecret: "pJwK4wwR5JqrsKrOa5Ncyn0tcJU",
    },
  });
  async function handleUpdate(e) {
    e.preventDefault();

    if (
      updateForm.resume.slice(-3) === "pdf" ||
      updateForm.resume.slice(-3) === "doc" ||
      updateForm.resume.slice(-4) === "docx"
    ) {
      console.log("SOLID RESUME");
      const resumeImage = cld.image(`resume-${user.id}`);
      updateForm.resume = resumeImage.publicID;
    }
    if (
      updateForm.profileImage.slice(-3) === "jpeg" ||
      updateForm.profileImage.slice(-3) === "png" ||
      updateForm.profileImage.slice(-3) === "jpg"
    ) {
      console.log("SOLID IMAGE");
      let type = updateForm.profileImage.slice(-3);
      const profileImage = cld.image(`profileImage${user.id}`);
      const imageUrl = profileImage.toURL(); // Get the
      updateForm.profileImage = imageUrl
      
    }

    console.log(updateForm)
    // Use the user.id from the updateForm object

      const response = await axios.put(
        `https://fp-server-ox4k.onrender.com/cp/profile/edit/${updateForm.id}`,
        updateForm
      );

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
      <div className="rounded-xl flex flex-wrap justify-center">
        <>{console.log(updateForm.resume, typeof updateForm.resume)}</>
        {Object.keys(updateForm).map((d, index) => (
          <div key={d} className="flex justify-evenly m-10">
            {d === "resume" || d === "profileImage" ? (
              <ModalEdit
                type="file" // Remove the curly braces around 'file'
                maxFileSize={2048} // Pass maxFileSize as a prop (assuming ModalEdit accepts maxFileSize prop)
                id={d}
                data={updateForm[d]}
                editChange={editChange}
              />
            ) : (
              <ModalEdit
                type="text"
                id={d}
                data={updateForm[d]}
                editChange={editChange}
              />
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
