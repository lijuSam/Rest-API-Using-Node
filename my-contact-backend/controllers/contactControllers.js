const getContact = (req, res) => {
  res.status(200).json({
    message: "Get All the contact",
  });
};

const createContact = (req, res, next) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      res.status(400);
      throw new Error("All fields are mandatory");
    }

    res.status(201).json({
      message: "Create the contact",
    });
  } catch (err) {
    next(err); // Passes the error to the error handling middleware
  }
};

const getIndivualId = (req, res) => {
  res.status(200).json({
    message: `Get the contact for ${req.params.id}`,
  });
};

const updateContact = (req, res) => {
  res.status(200).json({
    message: `Updated contact ${req.params.id}`,
  });
};

const deleteContact = (req, res) => {
  res.status(200).json({
    message: `deleted the  contact ${req.params.id}`,
  });
};

module.exports = {
  getContact,
  createContact,
  getIndivualId,
  updateContact,
  deleteContact,
};
