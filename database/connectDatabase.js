const mongoose = require('mongoose');

const connectDB=(URL_DATABASE)=>{
    mongoose.connect(URL_DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

}
module.exports={
    connectDB
}