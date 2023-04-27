import mongoose from "mongoose";
import Comment from "./Comment.js";

const postSchema = mongoose.Schema(
    {
        userId:{
            type: String,
            required: true
        },
        firstName:{
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required: true
        },
        location:String,
        description:String,
        picturePath:String,
        userPicturePath:String,
        likes :{
            type:Map,
            of:Boolean,
        },
        comments:[
            {
                type: mongoose.Schema.Types.ObjectId, ref: Comment
            }
        ]
    },
    {timestamps:true}
);

const Post= mongoose.model("Post",postSchema);

export default Post;