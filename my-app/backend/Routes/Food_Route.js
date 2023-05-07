const express = require("express");
const Authentication = require('../Middlewares/Authentication');
const {addFood, updateFood, deleteFood, fetchallFoods } = require("../controller/Admin/Foods");
const {fetchallFoodsPublic} = require("../controller/Public/Foods_public");
const userRouter = express.Router();
exports.userRouter = userRouter;

userRouter.route("/fetchallFoods").get(Authentication, fetchallFoods);
userRouter.route("/addFood").post(Authentication, addFood);
userRouter.route("/updateFood/:_id").put(Authentication, updateFood);
userRouter.route("/deleteFood/:_id").delete(Authentication, deleteFood);

userRouter.route("/pfoods").get(fetchallFoodsPublic ); 

module.exports = userRouter;