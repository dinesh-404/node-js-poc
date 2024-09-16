const express = require("express");
const { getContacts, createContact, getContactById, deleteContact, updateContact } = require("../controller/contactController");

const router = express.Router();

router.route("/contact").get(getContacts).post(createContact);
router.route("/contact/:id").get(getContactById).delete(deleteContact).put(updateContact);

module.exports = router;