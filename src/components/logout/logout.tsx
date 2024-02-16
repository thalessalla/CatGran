import "./logout.css"

import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../slices/authSlice'; 

function LogoutButton() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); 
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}

export default LogoutButton;