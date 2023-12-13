import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ChangePassword from "./Auth/ChangePassword";
import { removeToken } from "../../services/LocalStorageService";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
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
          <Typography variant="h5">Email:NoOne@gmail.com</Typography>
          <Typography variant="h6">Name:Abu RayhaN</Typography>
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
