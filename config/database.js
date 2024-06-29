import mongoose from "mongoose";
import 'dotenv/config'

const connectionLink = process.env.mongo_url


export const databaseConection =() =>{
    mongoose.connect(connectionLink).then(() => {
        console.log('Database connected')
    });
};