//import logo from './logo.svg';
import './App.css';
import Cart from "./components/Cart";
import {  Routes, Route } from "react-router-dom";
import Display from './components/Display';


function App() {
  return (
  <>
  <Routes>
     <Route path ="/" element={<Cart/>} />
     <Route path ="/display" element={<Display/>} />
  </Routes>
  </>
  );
}

export default App;
