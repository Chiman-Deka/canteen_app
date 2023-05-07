import React, { useContext, useState } from 'react'
import eventContext from '../../context/events/eventContext';
import FormData from 'form-data';

const Admin_addevent = () => {
    const context = useContext(eventContext);
    const { addEvent } = context;

    const [event, setEvent] = useState({ title: "", description: "", url:"" })

    const postDetails = () =>{
        const data = new FormData()
        data.append("file", event.url)
        data.append("upload_preset", "EDC_AEC")
        data.append("cloud_name", "dmyd12iwm")
        fetch("https://api.cloudinary.com/v1_1/dmyd12iwm/image/upload", {
            method: "post",
            body: data
        })
        .then(res => res.json())
        .then(data=> {
            console.log(data)
            const aa = { url: data.url}
            setEvent({...event, aa})
        })
        .catch(err=>{
            console.log(err)
        })
        console.log(data)
    }
    const handleClick = (e) => {
        e.preventDefault(); 
        addEvent(event.title, event.description );      // addNote from the NoteState.js
        setEvent({ title: "", description: "", tag: "", url: "" })

        postDetails();
        // props.showAlert("Added Successfully", "success")

        // const data = new FormData()
        // data.append("file", event.url)
        // data.append("upload_preset", "EDC_AEC")
        // data.append("cloud_name", "dmyd12iwm")
        // fetch("https://api.cloudinary.com/v1_1/dmyd12iwm/image/upload", {
        //     method: "post",
        //     body: data
        // })
        // .then(res => res.json())
        // .then(data=> {
        //     console.log(data)
        // })
        // .catch(err=>{
        //     console.log(err)
        // })
    }

    
    

    const onChange = (e) => {
        setEvent({ ...event, [e.target.name]: e.target.value })    // name of <input> == value (whatever entered)
    }
    
    const onChangefile = (e) => {
        const qqq = {url: e.target.files[0]}
        setEvent({...event, qqq})
    }
    return (
        <div className="mb-5 container my-3">
            <h5 >Add a Event</h5>
            <form >
                <div className="mb-2">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="title" value={event.title} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-2">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" value={event.description} name="description" onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Default file input example</label>
                    <input className="form-control" type="file" id="formFile" onChange = {onChangefile } />
                </div>
                <button disabled={event.title.length < 5 || event.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Event</button>
            </form>
        </div>
    )
}

export default Admin_addevent;