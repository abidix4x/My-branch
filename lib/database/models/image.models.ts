import { Schema, model, models } from "mongoose";

export interface IImage extends Document{
    title: string;
    transformationType: string;
    publicId: string;
    securedUrl: string;
    width?: number;
    height?: number;
    config?:object;
    transformationUrl?:string;
    aspectRatio?:number;
    color?:string;
    prompt?:string;
    author:{
        _id:string;
        firstName:string;
        lastName:string;
    };
    createdAt?:Date;
    updatedAt?:Date;
}

const ImageSchema= new Schema({
    title:{type:"string",required:true},
    transformationType:{type:"string",required:true},
    publicId:{type:"string",required:true},
    securedUrl:{type:"string",required:true},
    width:{type:"number"},
    height:{type:"number"},
    config:{type:Object},
    transformationUrl:{type:URL},
    aspectRatio:{type:"string"},
    color:{type:"string"},
    prompt:{type:"string"},
    author:{type: Schema.Types.ObjectId,ref:'User'},
    createdAt:{type:"string",default:Date.now()},
    updatedAt:{type:"string",default:Date.now()},
});

const Image = models?.Image|| model('Image',ImageSchema); 

export default Image;