import {
  TextField,
  Button,
  Box,
  Alert,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Registration = () => {
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
      email: data.get("email"),
      name: data.get("name"),
      password: data.get("password"),
      confirm_pass: data.get("password_confirmation"),
      tc: data.get("tc"),
    };
    // checking if all the data exists in the form
    if (
      actualData.email &&
      actualData.password &&
      actualData.confirm_pass &&
      actualData.name &&
      actualData.tc !== null
    ) {
      //checking if pass and confirm pass match
      if (actualData.password === actualData.confirm_pass) {
        console.log(actualData);
        document.getElementById("registration-form").reset();
        setError({
          status: true,
          msg: "Registration Success",
          type: "success",
        });
        navigate("/login");
      } else {
        setError({
          status: true,
          msg: "Password and Confirm Password does not match!",
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
      {" "}
      <Box
        component="form"
        noValidate
        sx={{ mt: 2, mx: 1 }}
        id="registration-form"
        onSubmit={handleSubmit}
      >
        <TextField
          required
          fullWidth
          id="name"
          name="name"
          label="Name"
          margin="normal"
        />
        <TextField
          required
          fullWidth
          id="email"
          name="email"
          label="Email Address"
          margin="normal"
        />
        <TextField
          required
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          margin="normal"
        />
        <TextField
          required
          fullWidth
          id="password_confirmation"
          name="password_confirmation"
          label="Confirm Password"
          type="password"
          margin="normal"
        />
        <FormControlLabel
          control={<Checkbox value="agree" color="primary" name="tc" id="tc" />}
          label="I agree to term and condition."
        />
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            Register
          </Button>
        </Box>
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
      </Box>
    </>
  );
};

export default Registration;
