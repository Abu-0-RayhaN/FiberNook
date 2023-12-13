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
import { useRegisterUserMutation } from "../../../services/userAuthApi";
const Registration = () => {
  const [server_error, setServerError] = useState({});
  const navigate = useNavigate();
  const [registerUser] = useRegisterUserMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData(e.currentTarget);
      const actualData = {
        email: data.get("email"),
        name: data.get("name"),
        password: data.get("password"),
        password2: data.get("password_confirmation"),
        tc: data.get("tc"),
      };
      const res = await registerUser(actualData);
      if (res.error) {
        // console.log(res.error.data.errors.non_field_errors);
        setServerError(res.error.data.errors);
      }
      if (res.data) {
        // console.log(res.data);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("An error Occureed", error);
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
        {server_error.name ? (
          <Alert severity="error">{server_error.name[0]}</Alert>
        ) : (
          ""
        )}
        <TextField
          required
          fullWidth
          id="email"
          name="email"
          label="Email Address"
          margin="normal"
        />
        {server_error.email ? (
          <Alert severity="error">{server_error.email[0]}</Alert>
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
          autoComplete="current-password"
        />
        {server_error.password ? (
          <Alert severity="error">{server_error.password[0]}</Alert>
        ) : (
          ""
        )}
        <TextField
          required
          fullWidth
          id="password_confirmation"
          name="password_confirmation"
          label="Confirm Password"
          type="password"
          margin="normal"
          autoComplete="current-password"
        />
        {server_error.password2 ? (
          <Alert severity="error">{server_error.password2[0]}</Alert>
        ) : (
          ""
        )}
        <FormControlLabel
          control={<Checkbox value="true" color="primary" name="tc" id="tc" />}
          label="I agree to term and condition."
        />
        {server_error.tc ? (
          <span style={{ fontSize: 12, color: "red", paddingLeft: 10 }}>
            {server_error.tc[0]}
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
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            Register
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Registration;
