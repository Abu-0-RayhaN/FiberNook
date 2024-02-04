/* eslint-disable react/prop-types */
import { Box, Card, Grid, Tabs, Tab } from "@mui/material";
import { pic1 } from "../../../assets/images";
import { useEffect, useState } from "react";
import UserLogin from "./UserLogin";
import Registration from "./Registration";
const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};
const LoginReg = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //initial scrollto top
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Grid container sx={{ marginBottom: "60px" }}>
        <Grid
          item
          lg={7}
          sm={5}
          sx={{
            backgroundImage: `url(${pic1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            display: { xs: "none", sm: "block" },
          }}
        ></Grid>
        <Grid item lg={5} sm={7} xs={12}>
          <Card sx={{ width: "100%", height: "100%" }}>
            <Box sx={{ mx: 3 }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  textColor="secondary"
                  indicatorColor="secondary"
                  value={value}
                  onChange={handleChange}
                >
                  <Tab
                    label="Login"
                    sx={{ textTransform: "none", fontWeight: "bold" }}
                  ></Tab>
                  <Tab
                    label="Registration"
                    sx={{ textTransform: "none", fontWeight: "bold" }}
                  ></Tab>
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <UserLogin />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Registration />
              </TabPanel>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginReg;
