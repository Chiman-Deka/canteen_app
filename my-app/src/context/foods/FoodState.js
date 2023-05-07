import React, { useState } from "react";
import foodContext from "./foodContext";

const FoodState = (props) => {
  const host = "http://localhost:5000";
  const foodsInitial = [];
  const [foods, setFoods] = useState(foodsInitial)

  // Get all foods---------------------------
  const getfoods = async() => {
    // api call
    const response = await fetch(`${host}/api/foods/fetchallfoods`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
        localStorage.getItem('token'),
      },
    });
    const json = await response.json()
    setfoods(json)
  }

  const pfoodsInitial = [];
  const [pfoods, psetfoods] = useState(pfoodsInitial)
  const getfoodsPublic = async() => {
    // api call
    const response = await fetch(`${host}/api/foods/pnotes`, {
      // const response = await fetch(`${host}/api/foods/fetchallfoods`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json()
    psetfoods(json)
  }

  // Delete food------------------------------
  const deletefood = async(id) => {
    // api call
    const response = await fetch(`${host}/api/foods/deletefood/${id}`, {
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
    const newfoods = foods.filter((food) => {
      // filter creates a new array by removing elements that don't belong.....The filter() method creates a new array....The filter() method does not change the original array
      return food._id !== id;
    });
    setfoods(newfoods);

  }



  // update food---------------------------------
  const editfood = async (id, title, description) => {
    // api call
    const response = await fetch(`${host}/api/foods/updatefood/${id}`, {
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

    let newfoods = JSON.parse(JSON.stringify(foods))
    // logic to edit in client side
    for (let index = 0; index < newfoods.length; index++) {
      const element = newfoods[index];
      if(element._id === id){
        newfoods[index].title = title;
        newfoods[index].description = description;
        break;
      }
    }
    setfoods(newfoods);
  }

    // adding food
    const addfood = async(title, description, url) => {
      // api call
      const response = await fetch(`${host}/api/foods/addfood`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
          localStorage.getItem('token'),
        },
        body: JSON.stringify({ title, description, url }),
      });
      const food = await response.json();
      //cleint side 
    setfoods(foods.concat(food))
    }

  
    return (
      <foodContext.Provider
        value={{ pfoods, foods, getfoods, getfoodsPublic, setfoods, editfood, deletefood, addfood}}
      >
        {props.children}
      </foodContext.Provider>
    );
};
export default foodState;



