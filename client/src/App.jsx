import './App.css'
import Home from './Home';
import Login from './Login'
import Register from './Register'
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
