// import mongoose from "mongoose"

// const connectDB = async ()=> {
//     try{
//         const conn = await mongoose.connect(`${process.env.MONGODB_URI}/quickblog`)
//         console.log(`MongoDB connected: ${conn.connection.host}`)
//     }catch(error){
//         console.log(`MongoDB connection error: ${error}`);
//     }
// }

// export default connectDB

// import mongoose from "mongoose";

// let isConnected = false; // ✅ track connection state

// const connectDB = async () => {
//   if (isConnected) {
//     return; // already connected, skip
//   }

//   try {
//     const conn = await mongoose.connect(`${process.env.MONGODB_URI}/quickblog`, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     isConnected = true; // mark as connected
//     console.log(`MongoDB connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`MongoDB connection error: ${error.message}`);
//     process.exit(1); // stop the app if DB fails
//   }
// };

// export default connectDB;

import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return; // Prevent multiple connections

  try {
    const conn = await mongoose.connect(`${process.env.MONGODB_URI}/quickblog`);
    isConnected = true;
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

