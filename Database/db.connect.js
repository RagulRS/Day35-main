import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config();

// const dbConnect = "mongodb://localhost:27017/Day35";
const dbConnect = "mongodb+srv://RagulRS:yellowflash@cluster0.ayal0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async() =>{
    try {
      const connection = await mongoose.connect(dbConnect);
      console.log("Database Connection Successful");
    } catch (error) {
        console.log("error",error)
    }
}

export default connectDB;