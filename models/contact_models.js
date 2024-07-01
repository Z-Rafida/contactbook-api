import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const contactSchema = new Schema({
    name : {type: String, required: true},
    number: {type: String, required: true},
    email: {type: String, required: true},
    address: {type: String}, 
});


contactSchema.plugin(toJSON);
export const ContactModel = model('contact', contactSchema);



