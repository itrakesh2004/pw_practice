const express=require("express");
const PORT =process.env.PORT || 5000;
const mongoose=require("mongoose");
const {userRoute}=require("./router/user.route");
const { connectToDB } = require("./config/db");
require('dotenv').config();


const app=express();

// app.use(cors());
// middelware to work json
app.use(express.json())

app.use("/",userRoute)






app.listen(PORT,async() => {
    await connectToDB()
    console.log(`server start ${PORT}`);
})