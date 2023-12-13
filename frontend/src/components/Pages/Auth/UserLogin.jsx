import { TextField, Button, Box, Alert, CircularProgress } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../../services/userAuthApi";
import { storeToken } from "../../../services/LocalStorageService";
const UserLogin = () => {
  const [server_error, setServerError] = useState({});
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    const res = await loginUser(actualData);
    if (res.error) {
      // console.log(res.error.data.errors.non_field_errors);
      setServerError(res.error.data.errors);
    }
    if (res.data) {
      console.log(res.data.token);
      storeToken(res.data.token);
      navigate("/dashboard");
    }
  };
  return (
    <>
      <Box
        component="form"
        noValidate
        sx={{ mt: 2, mx: 1 }}
        id="login-form"
        onSubmit={handleSubmit}
      >
        <TextField
          required
          fullWidth
          id="email"
          name="email"
          label="Email Address"
          margin="normal"
        />{" "}
        {server_error.email ? (
          <span style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
            {server_error.email[0]}
          </span>
        ) : (
          ""
        )}
        <TextField
          required
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          margin="normal"
        />
        {server_error.password ? (
          <span style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
            {server_error.password[0]}
          </span>
        ) : (
          ""
        )}
        {server_error.non_field_errors ? (
          <Alert severity="error">{server_error.non_field_errors[0]}</Alert>
        ) : (
          ""
        )}
        <Box textAlign="center">
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, px: 5 }}
            >
              Login
            </Button>
          )}
        </Box>
        <NavLink to="/sendpasswordresetemail">Forgot Password?</NavLink>
      </Box>
    </>
  );
};

export default UserLogin;
