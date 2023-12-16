import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import { useChangeUserPasswordMutation } from "../../../services/userAuthApi";
// import { getToken } from "../../../services/LocalStorageService";
// import { useNavigate } from "react-router-dom";
const ChangePassword = () => {
  const [server_error, setServerError] = useState({});
  const [changeUserPassword] = useChangeUserPasswordMutation();
  // const { access_token } = getToken();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      oldPassword: data.get("oldPassword"),
      password2: data.get("password2"),
      password3: data.get("password3"),
    };

    const res = await changeUserPassword(actualData);
    if (res.error) {
      // console.log(res.error.data.errors.non_field_errors);
      setServerError(res.error.data.errors);
      console.log("consoling from change pass", server_error);
    }
    if (res.data) {
      console.log("consoling from change pass", res.data.token);
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
          <TextField
            required
            fullWidth
            id="password2"
            name="password2"
            label="New Password"
            type="password"
            margin="normal"
          />
          <TextField
            required
            fullWidth
            id="password3"
            name="password3"
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
              Update
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ChangePassword;
