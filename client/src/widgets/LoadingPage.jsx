import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function LoadingPage({ user }) {
  const navigate = useNavigate();

  useEffect(() => {
    // You can perform any additional loading-related logic here
    // For example, fetching user data if needed
  }, [user.id]);

  // Check if user is available
  if (user) {
    return (
      <div>
        Loading page
        <br />
        <button onClick={() => navigate(`/profile/edit/${user.id}`)}>Edit Profile</button>
        <br />
        <button onClick={() => navigate(`/home/${user.id}`)}>Look Around</button>
      </div>
    );
  } else {
    // Redirect to another route if user is not available
    window.location.reload() // Replace '/login' with your desired route
    return null; // You can return null or any loading message here
  }
}

export default LoadingPage;
