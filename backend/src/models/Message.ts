import mongoose,{ Schema, type Document } from "mongoose";

//creating tables in the  database
export interface IMessage extends Document{
    chat:mongoose.Types.ObjectId,
    sender:mongoose.Types.ObjectId,     
    text:string,
    createdAt:Date,
    upatedAt:Date,

}

//conditions for one of the fields in the table
const MessageSchema = new Schema <IMessage>({
    chat:{
        type:Schema.Types.ObjectId,
        ref:"Chat",
        required:true,
    },
     sender:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
      text:{
        type: String,
        required:true,
        trim:true,
    },

},
{
    timestamps:true,
});

// indexes for faster queries
MessageSchema.index({ chat:1 ,createdAt:1 });//oldest one first 
//1 is ascending order
//-1 for desending

export const Message = mongoose.model("Message",MessageSchema)