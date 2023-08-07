import mongoose, { Model, models } from "mongoose";
import { projectInterface } from "../../interfaces/Project.interface";
const { model, Schema } = mongoose;
const ProjectModalSchema = new Schema<projectInterface>(
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

export const ProjectModal: Model<projectInterface, {}> =
    models.Project || model("Project", ProjectModalSchema);
