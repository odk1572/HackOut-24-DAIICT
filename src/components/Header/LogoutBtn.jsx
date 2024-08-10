import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      className="px-3 py-2 text-sm font-medium bg-white text-blue-600 border border-blue-600 hover:bg-blue-600 hover:text-white rounded-full transition duration-300 w-full sm:w-auto"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;

