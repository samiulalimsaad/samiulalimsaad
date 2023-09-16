import mongoose from "mongoose";

const connectDB = () => {
    console.log("database triggered");
    if (mongoose.connections[0].readyState) {
        console.log("new connection established for database");
    }
    mongoose.connect(process.env.DATABASE_URL as string);
};

export default connectDB;
