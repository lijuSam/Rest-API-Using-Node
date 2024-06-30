const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the contact Name"],
    },
    email: {
      type: String,
      required: [true, "Please add the contact Email"],
    },

    phone: {
      type: String,
      required: [true, "Please add the  contact phoneNumber"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact" ,contactSchema )