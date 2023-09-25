const Post=require("../models/post")


// create a new Post post


const create_new_Post=async (req,res)=>{
    try {
        const { title, content, author, tags, media } = req.body;
        const newPost = await Post.create({ title, content, author, tags, media });
        res.status(201).json(newPost);
      } catch (error) {
        res.status(500).json({ error: 'Error creating a new Post post' });
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
        const Post = await Post.findById(req.params.id);
        if (!Post) {
          return res.status(404).json({ error: 'Post post not found' });
        }
        res.status(200).json(Post);
      } catch (error) {
        res.status(500).json({ error: 'Error fetching the Post post' });
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
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
        if (!updatedPost) {
          return res.status(404).json({ error: 'Post post not found' });
        }
        res.status(200).json(updatedPost);
      } catch (error) {
        res.status(500).json({ error: 'Error updating the Post post' });
      }
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