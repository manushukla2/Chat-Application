import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderID:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    receiverID:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
       
    },
    message:{
        type:String,
        required:true
    }
    //createdAt,updatedAt
},{timestamps:true});

const Message = mongoose.model("Message",messageSchema);
export default Message;