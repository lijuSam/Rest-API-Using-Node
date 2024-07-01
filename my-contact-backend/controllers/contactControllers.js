const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json({
    contacts,
  });
});

const createContact = asyncHandler(async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      res.status(400);
      throw new Error("All fields are mandatory");
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
    });

    res.status(201).json({
      contact,
    });
  } catch (err) {
    next(err); // Passes the error to the error handling middleware
  }
});

const getIndivualId = asyncHandler(async (req, res) => {
  const contact = await Contact.findOne({ _id: req.params.id });

  if (!contact) {
    throw new Error("Contact not found");
  }
  res.status(200).json({
    contact,
  });
});

const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findOne({ _id: req.params.id });

  if (!contact) {
    throw new Error("Contact not found");
  }

  const updatedContact = await Contact.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );
  res.status(200).json({
    updatedContact,
  });
});

const deleteContact = asyncHandler(async (req, res) => {
  
  const contact = await Contact.findOne({_id : req.params.id})
   
  if(!contact){
    throw new Error("Contact not found");
  }
   await Contact.findOneAndDelete()

  res.status(200).json({
   contact
  });
});

module.exports = {
  getContact,
  createContact,
  getIndivualId,
  updateContact,
  deleteContact,
};
