
const User=require("../models/user")


const UserController={

    create_user:async (req,res)=>{
        try{
              
              // req.boby.birth_day=new Date(req.boby.birth_day)
            
            const newUser=new User(req.body);
            await newUser.save();
            res.status(201).send(newUser)

        }
        catch (error){
         
                if ((error["keyValue"]).hasOwnProperty("password") ||(error["keyValue"]).hasOwnProperty("birth_day") ||(error["keyValue"]).hasOwnProperty("gender")){
                  res.status(500).json({"message":Object.keys((error["keyValue"]))+" is require"})
                }
                else{
                  res.status(500).json({"message":Object.keys((error["keyValue"]))+" is require and unique"})
                  

                }
            


            
        }   

    },
    get_all_users:async(req,res)=>{
        try {
            const users = await User.find();
            res.status(200).json(users);
          } catch (error) {
            res.status(500).json({ error: 'Error fetching users' });
          }
    },
    get_user_by_id:async(req,res)=>{
        try{
            
            const user=await User.findById(req.params.id)
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
              }
              res.status(200).json(user);
        }
        catch (error) {
            res.status(500).json({ error: 'Error fetching the user '+error });
          }
        
    },
    update_user:async(req,res)=>{
        try {
            const updatedUser = await User.findByIdAndUpdate(
              req.params.id,
              req.body,
              { new: true }
            );
            if (!updatedUser) {
              return res.status(404).json({ error: 'User not found' });
            }
            res.status(200).json(updatedUser);
          } catch (error) {
            res.status(500).json({ error: 'Error updating the user' });
          }
    },
    // Delete a user by ID
    delete_user_by_id:async(req,res)=>{
        try {
            const deletedUser = await User.findByIdAndRemove(req.params.id);
            if (!deletedUser) {
              return res.status(404).json({ error: 'User not found' });
            }
            res.status(204).send(); // No content on successful deletion
          } catch (error) {
            res.status(500).json({ error: 'Error deleting the user' });
          }
    },
    get_user_by_name:async(req,res)=>{
      try {
        const deletedUser = await User.findOne()
        if (!deletedUser) {
          return res.status(404).json({ error: 'User not found' });
        }
        res.status(204).send(); // No content on successful deletion
      } catch (error) {
        res.status(500).json({ error: 'Error deleting the user' });
      }

    }

}
module.exports=UserController