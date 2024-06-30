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
        const allContacts = await ContactModel.find(req.body);
        res.send(allContacts)
    } catch (error) {
        next(error)        
    }
};

// get one contact by id
export const oneContactById = async (req, res, next) => {
    try {
        const oneContactById = await ContactModel.findById(req.body.id);
        res.send(oneContactById)
    } catch (error) {
        next (error)
    }
};

// update one contact by id
export const updateById = async(req, res, next) => {
    try {
        const tel = req.body.number
        const updateById = await ContactModel.findByIdAndUpdate(req.body.id, {number: tel});
        res.send(updateById)
    } catch (error) {
        next(error)
    }
};

// delete one contact by id
export const deleteById = async (req, res, next) => {
   try {
    const deleteContact = req.body
    const deleteById = await ContactModel.findByIdAndDelete(req.body.id, {_id: deleteContact});
    res.send(deleteById)
   } catch (error) {
    next (error)
   }
}