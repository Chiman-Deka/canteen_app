import React, { useContext, useEffect, useRef, useState } from 'react'
import Admin_addfood from './Admin_addfood';
import foodContext from '../../context/foods/foodContext';
import FoodItem from './Admin_foodItem';
import { useNavigate } from 'react-router-dom';

const Admin_foods = (props) => {
    const context = useContext(foodContext);
    let history = useNavigate();
    const { foods, getFoods, editFood } = context || {};
    // useEffect(() => {
    //     getEvents()     // all the events are fetched
    //     // eslint-disable-next-line
    // }, []);
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getFoods()              // all notes have been fetched
        }      
        else{
            history('/login')
        }
    }, [])  

    const ref = useRef(null);
    const refClose = useRef(null);
    const [food, setFood] = useState({ id: "", etitle: "", edescription: "" })

    const updateFood = (currentFood) => {
        ref.current.click();
        setFood({ id: currentFood._id, etitle: currentFood.name, edescription: currentFood.description })
    }

    const handleClick = (e) => {
        editFood(food.id, food.etitle, food.edescription)
        refClose.current.click();
        props.showAlert("Updated Successfully", "success")
    }

    const onChange = (e) => {
        setFood({ ...food, [e.target.name]: e.target.value })    // name of <input> == value (whatever entered)
    }

    return (
        <>
            <h1 className="text-center">Events Section</h1>
            <p className="mb-5 text-center">You can view, add, edit, delete an Food Item</p>

            <Admin_addfood showAlert={props.showAlert}/>

            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Food Item</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="my-3">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={food.etitle} minLength={5} required aria-describedby="emailHelp" onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" value={food.edescription} onChange={onChange} minLength={5} required />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={food.etitle.length<5 || food.edescription.length<5} onClick={handleClick} className="btn btn-primary">Update Food Item</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h2>Your Food Items</h2>
                <div className="container mx-2">
                {foods.length === 0 && 'No events to display'}
                </div>
                {foods.map((food) => {
                    return <FoodItem event={food} key={food._id} showAlert={props.showAlert} updateFood={updateFood} />
                })}
            </div>
        </>

    )
}

export default Admin_foods;
