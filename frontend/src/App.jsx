import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Pages/Layout";
import Home from "./components/Pages/Home";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
