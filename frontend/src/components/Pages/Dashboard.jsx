//External imports
// import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
//imports from files
import ChangePassword from "./Auth/ChangePassword";
import { getToken, removeToken } from "../../services/LocalStorageService";
import { UnsetUserToken } from "../../features/authSlice";
import { useGetLoggedUserQuery } from "../../services/userAuthApi";
import { UnsetUserInfo, setUserInfo } from "../../features/userSlice";
import { setTitle } from "../../features/titleSlice";
const Dashboard = () => {
  const dispatch = useDispatch();
  // change password
  const [showChangePassword, setShowChangePassword] = useState(false);
  const toggleChangePassword = () => {
    setShowChangePassword(!showChangePassword);
  };
  // Set the title explicitly
  useEffect(() => {
    dispatch(setTitle("FiberNook| Dashboard"));
  }, [dispatch]);

  //setting page title
  dispatch(setTitle("Geek Shop | Dashboard "));
  //navigation and fetching acccess token
  const navigate = useNavigate();
  const { access_token } = getToken();

  // fetching logged user data
  const { data, isSuccess } = useGetLoggedUserQuery(access_token);
  const [userData, setUserData] = useState({
    email: "",
    name: "",
  });
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        email: data.email,
        name: data.name,
      });
    }
  }, [data, isSuccess]);

  // Store User Data in Redux Store;
  useEffect(() => {
    if (data && isSuccess) {
      dispatch(
        setUserInfo({
          email: data.email,
          name: data.name,
        })
      );
    }
  }, [data, isSuccess, dispatch]);

  // logout| unsetting redux store data and localstorage
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");

    if (confirmLogout) {
      dispatch(UnsetUserToken({ access_token: null }));
      dispatch(UnsetUserInfo({ name: "", email: "" }));
      removeToken();
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  return (
    <div className="max-w-screen-2xl container py-12 xl:px-28 px-4 pb-12">
      <div className="flex flex-col md:flex-row">
        <div className="bg-gray-800 text-white p-8 md:w-1/4 w-full">
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          <p className="text-lg">Email: {userData.email}</p>
          <p className="text-lg">Name: {userData.name}</p>
          <button
            className="mt-8 bg-yellow-500 text-white px-8 py-3 rounded-full"
            onClick={handleLogout}
          >
            Logout
          </button>
          <button
            className="mt-8 bg-blue-500 text-white px-8 py-3 rounded-full"
            onClick={toggleChangePassword}
          >
            Change Password
          </button>
        </div>
        <div className="flex flex-col md:w-3/4 w-full">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
            {/* Add your orders list content here */}
            <p className="text-red-500 text-center">You have no orders.</p>
          </div>
          <div
            className={`flex-grow p-8 md:pl-8 transition-opacity duration-300 ease-in-out ${
              showChangePassword ? "opacity-100 mt-8" : "opacity-0 mt-0"
            }`}
          >
            {showChangePassword && (
              <div
                className={`mt-8 transition-opacity duration-300 ease-in-out opacity-100`}
              >
                <ChangePassword />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
