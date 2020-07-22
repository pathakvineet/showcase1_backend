
const mongoose = require('mongoose');
const db = process.env.DB;

//----------------------------------------------------------------------------------
// Connect to MongoDB

const connectDB = () => {

  mongoose.connect(
    db,
    { useNewUrlParser: true ,
      useUnifiedTopology: true,
      useFindAndModify: false,
      'useCreateIndex': true
    }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));
  }
  
module.exports = connectDB;
//----------------------------------------------------------------------------------  

  
