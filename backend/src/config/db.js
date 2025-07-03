import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://amatorciast:abcdefghijk@cluster0.qzhq7ml.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("MongoDB connected successfully!")
    } catch (error) {
        console.error("Error connecting to MongoDB:, error");
    }
}