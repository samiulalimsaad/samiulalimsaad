import connectDB from "../Database";
import { ProjectModal } from "../Models/Projects.model";

export const getProjects = async () => {
    await connectDB();
    return await ProjectModal.find({}).sort({ priority: -1 });
};
