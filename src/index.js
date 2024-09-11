// require('dotenv').config({path: './env'})
// console.log(process.env)
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
import express from "express"; // Corrected import
import connectDB from "./db/index.js";
import dotenv from "dotenv"
const app = express(); // Corrected function call


dotenv.config({
    path: './.env'
})

connectDB()


// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`); // Corrected string interpolation
//         console.log("Connected to the database");

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port: ${process.env.PORT}`); // Corrected string interpolation
//         });
//     } catch (error) {
//         console.log("This is your error:", error);
//         throw error;
//     }
// })();
