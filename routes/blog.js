const express = require('express');
const route=express.Router();
const BlogController=require("../controllers/blog")
const uploadmiddleware=require("../middlewares/update")

route.post("/v1/api/blog",BlogController.create_new_blog);
route.get("/v1/api/blog",BlogController.get_all_blog);
route.get("/v1/api/blog/:id",BlogController.get_blog_by_id)
route.delete("/v1/api/blog/:id",BlogController.delete_blog_by_id)
route.put("/v1/api/blog/:id",BlogController.update_blog_by_id)
route.get("/v1/api/:user_id/blog",BlogController.getAllBlogsByUser)

module.exports=route
