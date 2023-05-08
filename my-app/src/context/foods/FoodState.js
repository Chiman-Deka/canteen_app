import React, { useState } from "react";
import foodContext from "./foodContext";

const FoodState = (props) => {
  const host = "http://localhost:5000";
  // api/foods/fetchallFoods
  const foodsInitial = [];
  const [foods, setFoods] = useState(foodsInitial)
  // console.log(localStorage.getItem('token'))
  // Get all foods---------------------------
  const getFoods = async() => {
    // api call
    const response = await fetch(`${host}/api/foods/fetchallFoods`, {
      method: "GET", 
      headers: {
        "Content-Type": "application/json",
        "auth-token":
        localStorage.getItem('token'),
      },
    });
    const json = await response.json()
    setFoods(json)
  }

  const pfoodsInitial = [];
  const [pfoods, psetFoods] = useState(pfoodsInitial)
  const getFoodsPublic = async() => {
    // api call
    const response = await fetch(`${host}/api/foods/pfoods`, {
      // const response = await fetch(`${host}/api/foods/fetchallfoods`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });
    const json = await response.json()
    psetFoods(json)
    console.log("public")
  }

  // Delete food------------------------------
  const deleteFood = async(id) => {
    // api call
    const response = await fetch(`${host}/api/foods/deleteFood/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
        localStorage.getItem('token'),
      },
    });
    const json = response.json();
    console.log(json)

    // deleting client side
    const newFoods = foods.filter((food) => {
      // filter creates a new array by removing elements that don't belong.....The filter() method creates a new array....The filter() method does not change the original array
      return food._id !== id;
    });
    setFoods(newFoods);

  }



  // update food---------------------------------
  const editFood = async (id, title, description) => {
    // api call
    const response = await fetch(`${host}/api/foods/updateFood/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
        localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description }),
    });
    const json = await response.json();
    console.log(json);

    let newFoods = JSON.parse(JSON.stringify(foods))
    // logic to edit in client side
    for (let index = 0; index < newFoods.length; index++) {
      const element = newFoods[index];
      if(element._id === id){
        newFoods[index].title = title;
        newFoods[index].description = description;
        break;
      }
    }
    setFoods(newFoods);
  }

    // adding food
    const addFood = async(name, description, img) => {
      // api call
      const response = await fetch(`${host}/api/foods/addFood`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
          localStorage.getItem('token'),
        },
        body: JSON.stringify({ name, description, img}),
      });
      const food = await response.json();
      //cleint side 
    setFoods(foods.concat(food))
    }

  
    return (
      <foodContext.Provider
        value={{ pfoods, foods, getFoods, getFoodsPublic, setFoods, editFood, deleteFood, addFood}}
      >
        {props.children}
      </foodContext.Provider>
    );
};
export default FoodState;



