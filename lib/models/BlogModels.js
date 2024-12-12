import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    authorImg:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

const BlogMode1 = mongoose.models.blog || mongoose.model( 'blog' , Schema);

export default BlogMode1;