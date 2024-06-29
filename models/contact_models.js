import { Schema, model } from "mongoose";
import normalize from "normalize-mongoose";

const contactSchema = new Schema({
    name : {type: String, required: true},
    number: {type: String, required: true},
    email: {type: String, required: true},
    address: {type: String},
    message: {type: String, required: true},
});


contactSchema.plugin(normalize)
export const ContactModel = model('contact', contactSchema);



