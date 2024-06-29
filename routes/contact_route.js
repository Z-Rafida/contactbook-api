import { Router } from "express";
import { addContact, getContacts, oneContactById, updateById, deleteById} from "../controllers/contact_controller.js";

// creating router
const contactRouter = Router();

// defining all route

// adding contact
contactRouter.post('/contact', addContact);

// getting all contacts
contactRouter.get('/contacts', getContacts);

// getting just one cantact
contactRouter.get('/contact/:id', oneContactById);

// update just one contact
contactRouter.patch('/contact/:id', updateById);

// delete a contatact
contactRouter.delete('/contact/:id', deleteById);

export default contactRouter;