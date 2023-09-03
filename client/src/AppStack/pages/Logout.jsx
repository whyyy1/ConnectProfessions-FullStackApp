import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { logout } from "../../Redux/UserSlice";

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