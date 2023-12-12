import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Pages/Layout";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import LoginReg from "./components/Pages/Auth/LoginReg";
import SendPasswordResetEmail from "./components/Pages/Auth/SendPasswordResetEmail";
import ResetPassword from "./components/Pages/Auth/ResetPassword";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route element={<Contact />} path="contact"></Route>
            <Route path="login" element={<LoginReg />} />
            <Route
              path="sendpasswordresetemail"
              element={<SendPasswordResetEmail />}
            />
            <Route path="reset" element={<ResetPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
