import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/Store/UserSlice";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function logEverythingOut() {
      // Dispatch the logout action
      navigate("/");
      dispatch(logout());
      window.location.reload();
    }

    logEverythingOut();
  }, []);

  return <div>Logging out...</div>;
};

export default LogoutPage;