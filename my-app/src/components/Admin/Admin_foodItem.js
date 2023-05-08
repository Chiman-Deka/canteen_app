import React, { useContext } from "react";
import foodContext from '../../context/foods/foodContext';

const FoodItem = (props) => {
    const context = useContext(foodContext);
    const { deleteFood } = context;

    // const { food, showAlert, updateFood } = props;
    const food = props.event;
    const updateFood = props.updateFood;
    
    return (
  
        <div className="col-md-3">
            <div className="card my-3">
            <img src={food.img} className="card-img-top" alt="Food Image"/>
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{food.name}</h5>
                        {/* <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteFood(food._id); props.showAlert("Deleted Succesfully", "success")}}></i>
                        <i className="fa-solid fa-user-pen" onClick={()=> {updateFood(food)}}></i> */}
                    </div>
                    {/* <button className="btn btn-sm btn-secondary"   onClick={()=>{updateFood(food)}}>Update</button> */}
                    <p className="card-text">{food.description} </p>
                    <button className="btn btn-sm btn-danger"   onClick={()=>{deleteFood(food._id); props.showAlert("Deleted Succesfully", "success")}}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;
