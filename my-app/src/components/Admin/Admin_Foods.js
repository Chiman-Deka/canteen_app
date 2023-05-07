import React, { useContext, useEffect, useRef, useState } from 'react'
import Adminaddevent from './Admin_addevent';
import eventContext from '../../context/events/eventContext';
import EventItem from './Admin_event_item';
import { useNavigate } from 'react-router-dom';

const Admin_events = (props) => {
    const context = useContext(eventContext);
    let history = useNavigate();
    const { events, getEvents, editEvent } = context || {};
    // useEffect(() => {
    //     getEvents()     // all the events are fetched
    //     // eslint-disable-next-line
    // }, []);
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getEvents()              // all notes have been fetched
        }      
        else{
            history('/login')
        }
    }, [])  

    const ref = useRef(null);
    const refClose = useRef(null);
    const [event, setEvent] = useState({ id: "", etitle: "", edescription: "" })

    const updateEvent = (currentEvent) => {
        ref.current.click();
        setEvent({ id: currentEvent._id, etitle: currentEvent.title, edescription: currentEvent.description })
    }

    const handleClick = (e) => {
        editEvent(event.id, event.etitle, event.edescription)
        refClose.current.click();
        props.showAlert("Updated Successfully", "success")
    }

    const onChange = (e) => {
        setEvent({ ...event, [e.target.name]: e.target.value })    // name of <input> == value (whatever entered)
    }

    return (
        <>
            <h1 className="text-center">Events Section</h1>
            <p className="mb-5 text-center">You can view, add, edit, delete an event</p>

            <Adminaddevent showAlert={props.showAlert}/>

            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={event.etitle} minLength={5} required aria-describedby="emailHelp" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" value={event.edescription} onChange={onChange} minLength={5} required />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={event.etitle.length<5 || event.edescription.length<5} onClick={handleClick} className="btn btn-primary">Update Event</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h2>Your Events</h2>
                <div className="container mx-2">
                {events.length ===0 && 'No events to display'}
                </div>
                {events.map((event) => {
                    return <EventItem event={event} key={event._id} showAlert={props.showAlert} updateEvent={updateEvent} />
                })}
            </div>
        </>

    )
}

export default Admin_events;
