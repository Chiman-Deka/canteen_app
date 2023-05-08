
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    let history = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        history('/login');
    }
    let location = useLocation();   // location is a object with propeties like pathname : "/"

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">AEC Canteen</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className= {`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="pagze" to="/">Home</Link>   {/*className is set as active when home is clicked location.pathname==="/" */}
                        </li>
                        <li className="nav-item">
                            <Link className= {`nav-link ${location.pathname==="/menu"? "active": ""}`} aria-current="pagze" to="/menu">Menu</Link>   {/*className is set as active when home is clicked location.pathname==="/" */}
                        </li>
                    </ul>
                    {!localStorage.getItem('token')? <form className="d-flex" role="search">
                    <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                    </form>: <button onClick={handleLogout} className="btn btn-primary">Log Out</button>}
                </div>
            </div>
        </nav>

    )
}

export default Navbar


// import React from 'react'
// import {Link} from 'react-router-dom';
// export default function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-success">
//         <div className="container-fluid">
//             <Link className="navbar-brand fs-1" to="/">AEC Canteen</Link>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav">
//                 <li className="nav-item">
//                 <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//                 </li>
                
//                 <li className="nav-item">
//                 <Link className="nav-link" to="/login">Login</Link>
//                 </li>
              
//             </ul>
//             </div>
//         </div>
//     </nav>

//   )
// }
