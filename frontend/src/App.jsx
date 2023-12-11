import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Pages/Layout";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import LoginReg from "./components/Pages/Auth/LoginReg";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route element={<Contact />} path="contact"></Route>
            <Route path="login" element={<LoginReg />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
