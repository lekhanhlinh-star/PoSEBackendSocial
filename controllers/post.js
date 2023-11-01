const Post=require("../models/post")


const path = require('path');

const create_new_Post=async (req,res)=>{
    try {
        const { title, content, author, tags } = req.body;
        
        
        const files = req.files; // Extract the uploaded file information

    // Construct the path to the image using the 'uploads' directory
        let newPost

        if (files){
          const media = req.files.map((file) => ({ filename: file.filename }));
          
       
          newPost = await Post.create({ title, content, author, tags, media });

        }
        else{
          newPost = await Post.create({ title, content, author, tags});
        }
        
        
        res.status(201).json(newPost);
      } catch (error) {
        res.status(500).json({ error: 'Error creating a new Post post '+error });
    }
}
const get_all_Post =async (req, res) => {
    try {
      const Posts = await Post.find().sort('-createdAt'); // Sort by most recent first
      res.status(200).json(Posts);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching Post posts' });
    }
}
const get_Post_by_id=async (req,res)=>{
    try {
         let id= req.params.id
         
        const post = await Post.findOne({"_id":id})
        if (!post) {
          return res.status(404).json({ error: 'Post post not found' });
        }
        res.status(200).json(post);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching the Post post '+error });
      }
       
}
const delete_Post_by_id=async(req,res)=>{
    try {
        const deletedPost = await Post.findByIdAndRemove(req.params.id);
        if (!deletedPost) {
          return res.status(404).json({ error: 'Post post not found' });
        }
        res.status(204).send(); // No content on successful deletion
      } catch (error) {
        res.status(500).json({ error: 'Error deleting the Post post' });
      }
}
// Update a Post post by ID
const update_Post_by_id=async(req,res)=>{
  try {
    const { title, content, author, tags } = req.body;
    const media = req.files.map((file) => file.filename); // Extract filenames from uploaded files

    const blog = new Blog({ title, content, author, tags, media });

    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
;
}
const getAllPostsByUser=async (req,res)=>{
  const authorId=req.params.user_id


  const Posts=await Post.find({author:authorId}).sort('-createdAt')
  res.status(200).json(Posts)


}

module.exports={
                create_new_Post,
                get_all_Post,
                get_Post_by_id,
                delete_Post_by_id,
                update_Post_by_id,
                getAllPostsByUser
}