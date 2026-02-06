/*import mongoose from "mongoose";


const connectDb =async()=>{

 const connect =await mongoose.connect(process.env.MONGO_URI)

 console.log(`mongo connection done ${connect.connection.host}`)*/
 //}
 /*const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo connected: ${connect.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
    process.exit(1);
  }
};


export default connectDb*/
import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo connected: ${connect.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDb;
