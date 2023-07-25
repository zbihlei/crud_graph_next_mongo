import {  BrowserRouter, Routes, Route  }from "react-router-dom";
import Tasks from "./pages/Tasks";
import Add from "./pages/Add";
import "./style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Tasks/>}/>
        <Route path="/add" element ={<Add/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
