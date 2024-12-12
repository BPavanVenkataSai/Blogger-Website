import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://pvs:pvs1212@cluster0.glwgm.mongodb.net/')
    console.log("DB Connected!")
}