import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from "./pages/Contact";
import SideNavBar from "./components/SideNavBar";
import SignIn from "./pages/SignIn";
import SingUp from "./pages/SingUp"
import CustomizedSnackbars from "./components/SnackBar";

function App() {
  return (
    <BrowserRouter>

      <NavBar />
      <SideNavBar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SingUp />} />
      </Routes>
      <CustomizedSnackbars />
    </BrowserRouter>
  );
}

export default App;
