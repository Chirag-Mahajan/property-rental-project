import mongoose from "mongoose";
mongoose.connect("mongodb+srv://chirag1464be22:chirag123@rental.ypddtji.mongodb.net/?retryWrites=true&w=majority&appName=rental").then(()=>{
    console.log("connected to db");
}).catch(err => console.log(err))
const mongoSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const User=mongoose.model('User',mongoSchema);
export default User;