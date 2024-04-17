import MyNavbar from "./components/MyNavbar";
import Main from "./pages/Main";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BlogCard from "./components/BlogCard";
import React, {useState} from 'react';
import data from "./data";



function App() {

  //const [postCount, setPostCount] = useState(0)
  const [dataInfo, setDataInfo] = useState(data);

  return (
    <BrowserRouter>
      <MyNavbar postCount={dataInfo.length}/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/blog" element={<BlogCard dataInfo={dataInfo} setDataInfo={setDataInfo} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
