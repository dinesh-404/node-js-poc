import { contactSchema } from "../schemas/contactschema";

const { get } = require("../routes/contactRoutes");
const asyncHandler = require("express-async-handler");


const getContacts = asyncHandler(async (req,res)=>{
    const contacts = await contactSchema.findAll();
    res.status(200).json(contacts);
})

const createContact = asyncHandler(async (req,res)=>{
    const {name,email,mobile}=req.body;
    if(!name || !email || !mobile){
        res.status(400)
        throw new Error("All fields are required.")
    }
    const contact = await contactSchema.create({
        name,email,mobile
    });
    res.status(201).json(contact);
})

const findContactById = asyncHandler(async (id)=>{
    const contact = await contactSchema.findOne({where:{id}});
    if(!contact){
        throw new Error("Contact not found with id "+id)
    }
    return contact;
})


const deleteContact = asyncHandler(async (req,res)=>{
    const id = req.params.id
    const contact = await findContactById(id)
    await contactSchema.deleteOne(contact);
    res.status(201).json({message:`Contact with ${id} was deleted successfully.`});
})

const updateContact = asyncHandler(async(req,res)=>{
    const contact = await findContactById(req.params.id)
    const updatedContact = await contactSchema.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.status(200).json(updatedContact);
})

const getContactById = asyncHandler(async(req,res)=>{
    const contact = await findContactById(req.params.id);
    res.status(200).json(contact);
})



module.exports = {getContacts,createContact,deleteContact,updateContact,getContactById}