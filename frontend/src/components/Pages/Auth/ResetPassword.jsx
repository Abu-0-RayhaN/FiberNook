import {
  TextField,
  Button,
  Box,
  Alert,
  Grid,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useResetPasswordMutation } from "../../../services/userAuthApi";
import { useDispatch } from "react-redux";
import { setTitle } from "../../../features/titleSlice";
const ResetPassword = () => {
  const dispatch = useDispatch();
  dispatch(setTitle("Geek Shop | Reset Password"));
  const [server_error, setServerError] = useState({});
  const [server_msg, setServerMsg] = useState({});
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const { id, token } = useParams();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      password1: data.get("password"),
      password2: data.get("password_confirmation"),
    };
    const res = await resetPassword({ actualData, id, token });
    if (res.error) {
      setServerError(res.error.data.errors);
      setServerMsg({});
    }
    if (res.data) {
      setServerError({});
      setServerMsg(res.data);
      document.getElementById("password-reset-form").reset();
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }

    // checking if all the data exists in the form
  };
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item sm={6} xs={12}>
          <h1>Reset Password</h1>
          <Box
            component="form"
            noValidate
            sx={{ mt: 2, mx: 1 }}
            id="password-reset-form"
            onSubmit={handleSubmit}
          >
            <TextField
              required
              fullWidth
              id="password"
              name="password"
              label="New Password"
              type="password"
              margin="normal"
            />
            {server_error.password1 ? (
              <span style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
                {server_error.password1[0]}
              </span>
            ) : (
              ""
            )}
            <TextField
              required
              fullWidth
              id="password_confirmation"
              name="password_confirmation"
              label="Confirm New Password"
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
            {server_error.non_field_errors ? (
              <Alert severity="error">{server_error.non_field_errors[0]}</Alert>
            ) : (
              ""
            )}
            {server_msg.msg ? (
              <Alert severity="success">{server_msg.msg}</Alert>
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
                  Send
                </Button>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ResetPassword;
