import './App.css'
import {Routes, Route } from "react-router-dom";
import Fail from './page/404/404.tsx'
import Home from './page/home/Home.tsx'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Fail/>}/>
      </Routes>
    </>    
  )
}

export default App
