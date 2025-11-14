import mongoose from "mongoose";

const connectDB = async () => {
    console.log("database triggered");
    if (mongoose.connections[0].readyState) {
        console.log("new connection established for database");
    }
    await mongoose.connect(process.env.NEXT_APP_DATABASE_URL as string);
};

export default connectDB;
