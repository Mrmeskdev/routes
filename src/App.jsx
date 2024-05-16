
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Market from "./Pages/Market";

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
       
          <Route index element={<Home />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Market" element={<Market />} />
          
        
      </Routes>
    </BrowserRouter>) }
