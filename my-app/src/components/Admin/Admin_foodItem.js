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
            <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{food.name}</h5>
                        <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteFood(food._id); props.showAlert("Deleted Succesfully", "success")}}></i>
                        <i className="fa-solid fa-user-pen" onClick={()=> {updateFood(food)}}></i>
                    </div>
                    <p className="card-text">{food.description} </p>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;
