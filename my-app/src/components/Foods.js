import React, { useContext, useEffect} from 'react'
// import { useNavigate } from "react-router-dom";
import FoodItem from './Food_Item';
import foodContext from '../context/foods/foodContext';

const Foods  = () => {
    const context = useContext(foodContext);
    const { pfoods, getFoodsPublic } = context ;
    
    useEffect(() => {
        getFoodsPublic();              
    }, [])  
    // const history = useNavigate();
  
    // const clicked = () => {
    //     history('/foods')
    // }
    

    return (
        <div>
            <div className="row my-3">
                <h2>Order Now</h2>
                <div className="container mx-2">
                {pfoods.length === 0 && 'No foods to display'}
                </div>
                {pfoods.map((food) => {
                    return <FoodItem food={food} />
                })}
            </div>
        </div>

    )
}

export default Foods;