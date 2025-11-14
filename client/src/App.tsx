import './App.css'
import {Routes, Route } from "react-router-dom";
import Fail from './page/404/404.tsx'
import Home from './page/home/Home.tsx'
import Login from './page/login/Login.tsx';
import Register from './page/register/Register.tsx';

function App() {


  return (
    <>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="*" element={<Fail/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Register/>}/>
      </Routes>
    </>    
  )
}

export default App
