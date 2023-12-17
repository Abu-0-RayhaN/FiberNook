import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Pages/Layout";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import LoginReg from "./components/Pages/Auth/LoginReg";
import SendPasswordResetEmail from "./components/Pages/Auth/SendPasswordResetEmail";
import ResetPassword from "./components/Pages/Auth/ResetPassword";
import Dashboard from "./components/Pages/Dashboard";
import { useSelector } from "react-redux";
const App = () => {
  const { access_token } = useSelector((state) => state.auth);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route element={<Contact />} path="contact"></Route>
            <Route
              path="login"
              element={
                !access_token ? <LoginReg /> : <Navigate to="/dashboard" />
              }
            />
            <Route
              path="sendpasswordresetemail"
              element={<SendPasswordResetEmail />}
            />
            <Route
              path="api/user/reset/:id/:token"
              element={<ResetPassword />}
            />
            <Route
              path="/dashboard"
              element={access_token ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route path="*" element={<h1>Error 404 Page not found!!</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
