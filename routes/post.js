const express = require('express');
const route=express.Router();
const PostController=require("../controllers/post")
const uploadmiddleware=require("../middlewares/update")



route.post("/v1/api/Post",uploadmiddleware.array("media",20),PostController.create_new_Post);
route.get("/v1/api/Post",PostController.get_all_Post);
route.get("/v1/api/Post/:id",PostController.get_Post_by_id)
route.delete("/v1/api/Post/:id",PostController.delete_Post_by_id)
route.put("/v1/api/Post/:id",uploadmiddleware.array("media",20), PostController.update_Post_by_id)
route.get("/v1/api/:user_id/Post",PostController.getAllPostsByUser)

module.exports=route
