const express = require('express');
const route=express.Router();
const UserController=require("../controllers/user")
const middelwaresAuth=require("../middlewares/verifyToken")

const LoginUser=require("../controllers/login")
route.post("/v1/api/user",UserController.create_user);
route.get("/v1/api/user",UserController.get_all_users);
route.get("/v1/api/user/:id",UserController.get_user_by_id)
route.delete("/v1/api/user/:id",UserController.delete_user_by_id)
route.put("/v1/api/user/:id",UserController.update_user)
route.post("/v1/api/user/login",LoginUser.login)

module.exports=route