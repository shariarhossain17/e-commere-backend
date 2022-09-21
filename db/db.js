const  mongoose = require('mongoose')
const colors = require("colors")
require("dotenv").config()

 const connectDb = async () => {
  try {
    await mongoose.connect(process.env.Database_Cluster,)
    .then(data => {
        console.log(colors.yellow('connect db'.bold));
    })
  } catch (error) {
    console.log(error.message)
  }
};

module.exports = connectDb