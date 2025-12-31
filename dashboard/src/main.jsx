import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  GeneralContextProvider  from "./components/GeneralContext";
import Home from "./components/Home";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <GeneralContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </GeneralContextProvider>
);
