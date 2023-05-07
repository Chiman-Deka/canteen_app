import React, { useContext } from "react";
import eventContext from '../../context/events/eventContext';

const EventItem = (props) => {
    const context = useContext(eventContext);
    const { deleteEvent } = context;

    const { event, updateEvent } = props;
    return (
  
        <div className="col-md-3">
            <div className="card my-3">
            <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{event.title}</h5>
                        <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteEvent(event._id); props.showAlert("Deleted Succesfully", "success")}}></i>
                        <i className="fa-solid fa-user-pen" onClick={()=> {updateEvent(event)}}></i>
                    </div>
                    <p className="card-text">{event.description} </p>
                </div>
            </div>
        </div>
    );
};

export default EventItem;
