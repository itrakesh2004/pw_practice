const mongoose=require("mongoose");

const connectToDB = async() => {
    mongoose.connect(process.env.DB_URL)
    .than( (con) => {
        console.log("succesfully conection");
    }) .catch((err) => {
        console.log("ERROR",err.message);
    })
}

module.exports={connectToDB}