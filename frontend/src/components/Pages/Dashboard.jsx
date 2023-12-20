//External imports
import { Button, Grid, Typography } from "@mui/material";
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
  //setting page title
  const dispatch = useDispatch();
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
    dispatch(UnsetUserToken({ access_token: null }));
    dispatch(UnsetUserInfo({ name: "", email: "" }));
    removeToken();
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };
  return (
    <>
      <Grid container>
        <Grid
          item
          sm={4}
          sx={{ backgroundColor: "gray", p: 5, color: "white" }}
        >
          <h1>DashBoard</h1>
          <Typography variant="h5">Email:{userData.email}</Typography>
          <Typography variant="h6">Name:{userData.name}</Typography>
          <Button
            variant="contained"
            color="warning"
            size="large"
            onClick={handleLogout}
            sx={{ mt: 8 }}
          >
            Logout
          </Button>
        </Grid>
        <Grid item sm={8}>
          <ChangePassword />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
