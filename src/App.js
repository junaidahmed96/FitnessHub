import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import ExersiceDetail from "./pages/ExersiceDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExersiceDetail />} />
        {/* <Route path='/' element={<Home />}/>
        <Route path='/' element={<Home />}/> */}
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
