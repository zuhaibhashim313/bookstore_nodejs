const express = require ("express");
const mongoose = require ("mongoose");
const router= require("./routes/book-routes");
const app= express();

// Middleware
app.use(express.json());
app.use("/books",router);

mongoose.connect ("mongodb+srv://admin:KyIfusrzVRLq1TeW@cluster0.1lp2boj.mongodb.net/bookStore?retryWrites=true&w=majority"
).then (()=> console.log("Connected to DataBase"))
 .then (()=>{
     app.listen(5000);
 })
 .catch((err)=>console.log(err));
