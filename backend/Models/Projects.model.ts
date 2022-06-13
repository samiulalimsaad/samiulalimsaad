import mongoose from "mongoose";
import { projectInterface } from "../interfaces/Project.interface";
const { model, Schema } = mongoose;
const orderSchema = new Schema<projectInterface>(
    {
        shortDescription: String,
        name: String,
        time: String,
        description: [String],
        image: String,
        tools: [String],
        githubFrontEnd: String,
        githubBackEnd: String,
        live: String,
    },
    { timestamps: true }
);

export const Order = model("Order", orderSchema);
