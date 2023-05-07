import React from 'react'
import { useNavigate } from "react-router-dom";

const Admin  = () => {
    const history = useNavigate();
  
    const clicked_event = () => {
        history('/foods')
    }
    // const clicked_team = () => {
    //     history('/team')
    // }
    return (
        <div>
            <h1 className=" mb-5 text-center">Admin Panel</h1>
            <div className="d-grid gap-2 col-6 mx-auto">
                {/* <button className="btn btn-primary btn-dark" type="button" onClick={clicked}>Events</button> */}
                <button className="btn btn-primary btn-dark" type="button" onClick={clicked_event}>Food</button>
                <button className="btn btn-primary btn-dark" type="button">Pending Orders</button>
            </div>
        </div>

    )
}

export default Admin;