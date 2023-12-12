import { TextField, Button, Box, Alert, Grid } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ResetPassword = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      password: data.get("password"),
      confirm_pass: data.get("password_confirmation"),
    };
    // checking if all the data exists in the form
    if (actualData.password && actualData.confirm_pass) {
      //checking if pass and confirm pass match
      if (actualData.password === actualData.confirm_pass) {
        console.log(actualData);
        document.getElementById("password-reset-form").reset();
        setError({
          status: true,
          msg: "Password Reset Success. Redirecting to login",
          type: "success",
        });
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        setError({
          status: true,
          msg: "Password and Confirm Password does not match.",
          type: "error",
        });
      }
    } else {
      setError({
        status: true,
        msg: "All Fields are Required",
        type: "error",
      });
    }
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
            <TextField
              required
              fullWidth
              id="password_confirmation"
              name="password_confirmation"
              label="Confirm New Password"
              type="password"
              margin="normal"
            />
            <Box textAlign="center">
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, px: 5 }}
              >
                Submit
              </Button>
            </Box>
            {error.status ? (
              <Alert severity={error.type}>{error.msg}</Alert>
            ) : (
              ""
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ResetPassword;
