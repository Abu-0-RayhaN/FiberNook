import { TextField, Button, Box, Alert, CircularProgress } from "@mui/material";
import { useState } from "react";
import { useChangeUserPasswordMutation } from "../../../services/userAuthApi";
import { getToken, removeToken } from "../../../services/LocalStorageService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UnsetUserToken } from "../../../features/authSlice";
import { UnsetUserInfo } from "../../../features/userSlice";
const ChangePassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [server_error, setServerError] = useState({});
  const [changeUserPassword, { isLoading }] = useChangeUserPasswordMutation();
  const { access_token } = getToken();
  console.log("This is the access token", access_token);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      oldPassword: data.get("oldPassword"),
      password2: data.get("password2"),
      password3: data.get("password3"),
    };

    const res = await changeUserPassword({ actualData, access_token });
    if (res.error) {
      // console.log(res.error.data.errors.non_field_errors);
      setServerError(res.error.data.errors);
    }
    if (res.data) {
      document.getElementById("password-change-form").reset();
      dispatch(UnsetUserToken({ access_token: null }));
      dispatch(UnsetUserInfo({ name: "", email: "" }));
      removeToken();
      navigate("/login");
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          maxWidth: 600,
          mx: 4,
        }}
      >
        <h1>Change Password</h1>
        <Box
          component="form"
          noValidate
          sx={{ mt: 2, mx: 1 }}
          id="password-change-form"
          onSubmit={handleSubmit}
        >
          <TextField
            required
            fullWidth
            id="oldPassword"
            name="oldPassword"
            label="Current Password"
            type="password"
            margin="normal"
          />
          {server_error.oldPassword ? (
            <span style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
              {server_error.oldPassword[0]}
            </span>
          ) : (
            ""
          )}
          <TextField
            required
            fullWidth
            id="password2"
            name="password2"
            label="New Password"
            type="password"
            margin="normal"
          />
          {server_error.password2 ? (
            <span style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
              {server_error.password2[0]}
            </span>
          ) : (
            ""
          )}
          <TextField
            required
            fullWidth
            id="password3"
            name="password3"
            label="Confirm New Password"
            type="password"
            margin="normal"
          />
          {server_error.password3 ? (
            <span style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
              {server_error.password3[0]}
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
                Change Password
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ChangePassword;
