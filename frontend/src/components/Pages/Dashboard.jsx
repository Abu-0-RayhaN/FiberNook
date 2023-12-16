import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ChangePassword from "./Auth/ChangePassword";
import { getToken, removeToken } from "../../services/LocalStorageService";
import { useDispatch } from "react-redux";
import { UnsetUserToken } from "../../features/authSlice";
import { useGetLoggedUserQuery } from "../../services/userAuthApi";
import { useEffect, useState } from "react";
import { UnsetUserInfo, setUserInfo } from "../../features/userSlice";
const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { access_token } = getToken();
  // console.log("Printing from dashboard", access_token);
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
  // Store User DAta in Redux Store;
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
  // console.log("use DAta", data);
  const handleLogout = () => {
    dispatch(UnsetUserToken({ access_token: null }));
    dispatch(UnsetUserInfo({ name: "", email: "" }));
    removeToken();
    navigate("/login");
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
