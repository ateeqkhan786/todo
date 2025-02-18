import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const dburl = process.env.DB_URL

const connectDb = async ()=>{
try {
    await mongoose.connect(dburl)
    console.log('database connect sucessfully')
} catch (error) {
    console.log(error)
}
}

export default connectDb;