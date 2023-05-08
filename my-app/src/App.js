import './App.css';
import React, { useState } from 'react';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Admin from './components/Admin/Admin'
import Adminfoods from './components/Admin/Admin_Foods'
import Alert from './components/Alert'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './components/Login';
import Menu from './components/Menu'

import FoodState from './context/foods/FoodState';

function App() {
  const [alert, setAlert] = useState(null);
  // const location = useLocation();

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=> {
      setAlert(null);
    }, 3500)
  }


  return (
    // <Router>
    //   <Routes>
    //     <Route exact path='/' element={<Home/>}/>
    //     <Route exact path='/admin' element={<Admin/>}/>
    //     <Route exact path='/foods' element={<Adminfoods showAlert={showAlert}/>}/>
    //     <Route exact path='/login' element={<Login showAlert={showAlert}/>}/>        
    //   </Routes>
    // </Router>
    <>
    <FoodState>
        <Router>
        <Navbar />
        <Alert alert={alert}/>
          <div className="container">
            <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/menu' element={<Menu/>}/>
            <Route exact path='/admin' element={<Admin/>}/>
            <Route exact path='/foods' element={<Adminfoods showAlert={showAlert}/>}/>
            <Route exact path='/login' element={<Login showAlert={showAlert}/>}/>
            </Routes>
          </div>
        </Router>
    </FoodState>
    </>
  );
}

export default App;
