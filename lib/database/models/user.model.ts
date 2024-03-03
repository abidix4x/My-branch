import { Schema, model, models } from "mongoose";


export interface IUser extends Document {
    clerkId: string;
    email: string;
    username: string;
    photo:string;
    firstName: string;
    lastName: string;
    planId:number;
    creditBalance:number;
}

const UserSchema= new Schema({
    email:{type:"string",required:true,unique:true},
    username:{type:"string",required:true,unique:true},
    clerkId:{type:"string",required:true,unique:true},
    firstName:{type:"string"},
    lastName:{type:"string"},
    planId:{type:"number",default:10},
    creditsBalance:{type:"number",default:10},
    photo:{type:"string",required:true}
});

const User=models?.User || model("User",UserSchema);

export default User;