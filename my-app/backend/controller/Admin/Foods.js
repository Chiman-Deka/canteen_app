// const express = require("express");
const Food = require("../../models/Foods");
// const cloudinary = require('cloudinary').v2;

// cloudinary.config({
//   cloud_name: 'dmyd12iwm',
//   api_key: '244432794532938',
//   api_secret: 'HJ3_PdoaXxQDEXC9zFPRO0I5GoY'
// })

const fetchallFoods = async (req, res) => {
  try {
    const foods = await Food.find({ user: req.user.id });      // all notes have been fetched...we are using the fetchuser where user is in the req.user
    // const foods = await food.find({});
    res.json(foods);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Internal server Error occured");
  }
}


const addFood = async (req, res) => {
  try {
    try {
      const { name, description, img } = req.body;     
      const food = new Food({     
        name,
        description,
        img,
        user: req.user.id,
      });
      const savedfood = await food.save();  
      res.json(savedfood);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Internal server Error occured");
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Internal server Error occured");
  }
}

const updateFood = async (req, res) => {
  try {
    const { name, description } = req.body;
        // Create a newfood  object
        const newFood = {};
        if(name){newFood.name = name};  
        if(description){newFood.description = description};  

        // Find the food to be updated and update it
        let food= await Food.findById(req.params._id);   // it returns the document by its respective id... here id is from this one "/updatefood/:id"
        if(!food){return res.status(404).send("Not Found")}   // if the fooddocument does not even exist

        // if(food.user.toString() !== req.user._id){        // here user is the object id of the selected fooddocumnet...if !== then user is trying to acces the foods of other user
        //     return res.status(401).send("Not Allowed");
        // }

        // now we have the fooddocuumnet and only the user is accesing it
        food= await Food.findByIdAndUpdate(req.params._id, {$set: newFood}, {new:true})   // now fooddocument is updated
        res.json({food});
      
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Internal server Error occured");
  }
}

const deleteFood = async (req, res) => {
  try {
    const { name, description } = req.body;

        // Find the foodto be deleted and delete it
        let food= await Food.findById(req.params._id);   // it returns the document by its respective id... here id is from this one "/updatefood/:id"
        if(!food){return res.status(404).send("Not Found")}   // if the fooddocument does not even exist

        // if(food.user.toString() !== req.user._id){        // here user is the object id of the selected fooddocumnet...if !== then user is trying to acces the foods of other user
        //     return res.status(401).send("Not Allowed");
        // }

        // now we have the fooddocuumnet and only the user is accesing it
        food= await Food.findByIdAndDelete(req.params._id)   // now fooddocument is updated
        res.json({"Success": "The food has been deleted", food: food});
      
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Internal server Error occured");
  }
}


// module.exports = router;
exports.addFood = addFood;
exports.updateFood = updateFood;
exports.deleteFood = deleteFood;
exports.fetchallFoods = fetchallFoods;
