import mongoose, { Model, models } from "mongoose";
import { emailInterface } from "../../interfaces/Email.interface";
const { model, Schema } = mongoose;

const EmailModalSchema = new Schema<emailInterface>(
    {
        name: String,
        email: String,
        message: String,
    },
    { timestamps: true }
);

export const EmailModal: Model<emailInterface, {}> =
    models.Email || model("Email", EmailModalSchema);
