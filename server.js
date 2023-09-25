const express = require("express");
const app = express();

require('dotenv').config();
const DB=require("./database/connectDatabase")
const URL_DATABASE = process.env.URL_DATABASE;
const PORT = process.env.PORT || 8000;
const userRoute=require("./routes/user")
const PostRoute=require("./routes/Post")
const imageRoute=require("./routes/image")
DB.connectDB(URL_DATABASE)

const cors = require('cors');
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.get("/", (req, res) => {
    res.send("Connected to server")
});

// use the routes
app.use(userRoute);
app.use(PostRoute);
app.use(imageRoute)




app.listen(PORT, () => {
    console.log("Server is running on http://localhost:"+PORT);
    
});
