const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required:[true,"Please add the name"]
    },
    number: {
        type: String,
        required:[true,"Please add the number"]
    },
    email: {
        type: String,
        required:[true,"Please add the email"]
    }
},
{
    timestamps:true
});

const Contact = mongoose.model("Contact",contactSchema);

module.exports = Contact;