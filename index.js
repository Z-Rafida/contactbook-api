import express from "express";
import mongoose from "mongoose";
import contactRouter from "./routes/contact_route.js";
import "dotenv/config"
import { databaseConection } from "./config/database.js";


// connecting to database
await mongoose.connect(process.env.mongo_url);

// defining the models
const model = mongoose;

// creatng the server
const app = express();

// calling the database
databaseConection();

// using the apps
app.use(express.json());

// using routes
app.use(contactRouter);

// Listening to the server
app.listen(3000, () => {
    console.log('App running on port 3000 ')
});