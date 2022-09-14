import {BrowserRouter, Route, Routes} from "react-router-dom";

import HomePage from "./pages/home-page";
import AboutPage from "./pages/about-page";
import ContactPage from "./pages/contact-page";
import RegisterPage from "./pages/register-page";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="" element={<RegisterPage></RegisterPage>}></Route>
          <Route path="home" element={<HomePage></HomePage>}></Route>
          <Route path="about" element={<AboutPage></AboutPage>}></Route>
          <Route path="contact" element={<ContactPage></ContactPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
