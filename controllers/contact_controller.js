import { ContactModel } from "../models/contact_models.js";

// storing data in the database with functions

// adding a new contact
export const addContact = async (req, res, next) => {
    try {
        const newContact = await ContactModel.create(req.body);
        res.send(newContact)
    } catch (error) {
        next(error)
    }
};

// getting all contact
export const getContacts = async (req, res, next) => {
    try {
        console.log('request', req.body)
        const allContacts = await ContactModel.find();
        res.send(allContacts)
    } catch (error) {
        next(error)        
    }
};

// get one contact by id
export const oneContactById = async (req, res, next) => {
    try {
        const oneContactById = await ContactModel.findById(req.params.id);
        res.send(oneContactById)
    } catch (error) {
        next (error)
    }
};

// update one contact by id
export const updateById = async(req, res, next) => {
    try {
        const eMail = req.body.email
        const updateById = await ContactModel.findByIdAndUpdate(req.params.id, {email: eMail});
        res.send(updateById)
    } catch (error) {
        next(error)
    }
};

// delete one contact by id
export const deleteById = async (req, res, next) => {
   try {
    const deleteById = await ContactModel.findByIdAndDelete(req.params.id);
    res.send(deleteById)
   } catch (error) {
    next (error)
   }
}