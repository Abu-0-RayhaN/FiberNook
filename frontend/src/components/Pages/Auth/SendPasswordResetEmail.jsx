import { TextField, Button, Box, Alert, Grid } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SendPasswordResetEmail = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const navigate = useNavigate();
  const isValidEmail = (email) => {
    // Regular expression for a basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
    };

    if (isValidEmail(actualData.email)) {
      document.getElementById("password-reset-email-form").reset();
      setError({
        status: true,
        msg: "Password Reset Email Sent. Check Your Email",
        type: "success",
      });
      navigate("/reset");
    } else {
      setError({
        status: true,
        msg: "Invalid Email Format. Please provide a valid email address",
        type: "error",
      });
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

            <Box textAlign="center">
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, px: 5 }}
              >
                Send
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

export default SendPasswordResetEmail;
