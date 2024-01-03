import {
  TextField,
  Button,
  Box,
  Alert,
  Grid,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { useSendPasswordResetEmailMutation } from "../../../services/userAuthApi";
import { useDispatch } from "react-redux";
import { setTitle } from "../../../features/titleSlice";
const SendPasswordResetEmail = () => {
  const dispatch = useDispatch();
  dispatch(setTitle("FiberNook| Reset Password"));
  const [server_error, setServerError] = useState({});
  const [server_msg, setServerMsg] = useState({});
  const [sendPasswordResetEmail, { isLoading }] =
    useSendPasswordResetEmailMutation();
  // const isValidEmail = (email) => {
  //   // Regular expression for a basic email validation
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
    };

    const res = await sendPasswordResetEmail(actualData);
    if (res.error) {
      setServerError(res.error.data.errors);
    }
    if (res.data) {
      setServerError({});
      setServerMsg(res.data);
      document.getElementById("password-reset-email-form").reset();
    }
  };
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item sm={6} xs={12}>
          <Box
            component="form"
            noValidate
            sx={{ mt: 2, mx: 1 }}
            id="password-reset-email-form"
            onSubmit={handleSubmit}
          >
            <Alert severity="info">
              Please provide the email you Registered with.
            </Alert>
            <TextField
              required
              fullWidth
              id="email"
              name="email"
              label="Email Address"
              margin="normal"
            />
            {server_error.email ? (
              <span style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
                {server_error.email[0]}
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

export default SendPasswordResetEmail;
