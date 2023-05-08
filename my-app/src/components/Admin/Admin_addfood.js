import React, { useContext, useState } from 'react'
import foodContext from '../../context/foods/foodContext';
// import FormData from 'form-data';

const Admin_addfood = () => {
    const context = useContext(foodContext);
    const { addFood } = context;

    const [food, setFood] = useState({ name: "", description: "", img: "" })

    const handleClick = (e) => {
        const img = "https://source.unsplash.com/random/300%C3%97300?";
        e.preventDefault(); 
        addFood(food.name, food.description , img+food.name);      // addNote from the NoteState.js
        setFood({ name: "", description: "", tag: "" })

        // postDetails();
        // props.showAlert("Added Successfully", "success")

        // const data = new FormData()
        // data.append("file", food.url)
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
        setFood({ ...food, [e.target.name]: e.target.value })    // name of <input> == value (whatever entered)
    }
    
    // const onChangefile = (e) => {
    //     const qqq = {url: e.target.files[0]}
    //     setfood({...food, qqq})
    // }
    return (
        <div className="mb-5 container my-3">
            <h5 >Add a Food Item</h5>
            <form >
                <div className="mb-2">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name="name" value={food.name} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-2">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" value={food.description} name="description" onChange={onChange} minLength={5} required />
                </div>
                {/* <div className="mb-2">
                    <label htmlFor="img" className="form-label">Image</label>
                    <input type="file" className="form-control" id="img" value={food.img} name="img" onChange={onChange} required />
                </div> */}
                {/* <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">Default file input example</label>
                    <input className="form-control" type="file" id="formFile" onChange = {onChangefile } />
                </div> */}
                <button disabled={food.name.length < 5 || food.description.length < 5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Food Item</button>
            </form>
        </div>
    )
}

export default Admin_addfood;