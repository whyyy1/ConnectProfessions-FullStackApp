import React from "react";
import { useNavigate } from "react-router-dom";
function AuthNav() {
  const navigate = useNavigate();
  return (
    <div class="avatar avatar-ring avatar-large absolute bottom-0">
      <div class="dropdown-container">
        <div class="dropdown">
          <label class="btn btn-ghost flex cursor-pointer px-0" tabindex="0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </label>
          <div class="dropdown-menu dropdown-menu-top-right">
            <a onClick={()=>{navigate('/')}} class="dropdown-item text-sm">Home</a>
            <a onClick={()=>{navigate('/login')}} tabindex="-1" class="dropdown-item text-sm">
              Login
            </a>
            <a onClick={()=>{navigate('/register')}} tabindex="-1" class="dropdown-item text-sm">
              Register
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthNav;
