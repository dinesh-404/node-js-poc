const express = require("express");
const { getContacts, createContact, getContactById, deleteContact, updateContact } = require("../controller/contactController");

export const contactRouter = express.Router();

contactRouter.route("/contact").get(getContacts).post(createContact);
contactRouter.route("/contact/:id").get(getContactById).delete(deleteContact).put(updateContact);
