

import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/UserSlice";
function ModalDelete({user}) {
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);

  const handleDeleteClick = async () => {
    console.log('delete',user.id);
    try{
    let response = await axios.delete(`http://localhost:5000/cp/profile/${user.id}`,{
        headers: {
            'Authorization': localStorage.getItem('user')
        },
        data: user,
    })
    
    dispatch(logout())
}catch(e){
    console.log(e.message)
}

  };
  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Delete
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>USER DELETE!</DialogHeader>
        <DialogBody divider>
         Are you sure
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>no</span>
          </Button>
          <Button variant="gradient" color="green" onClick={() => {
    handleOpen();
    handleDeleteClick();
}}>
            <span>yes</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export default ModalDelete


