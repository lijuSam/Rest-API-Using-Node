const express = require("express");
const router = express.Router();

const {
    getContact,
    createContact,
    getIndivualId,
    updateContact,
    deleteContact,
} = require("../controllers/contactControllers");

router.route("/").get(getContact);

router.route("/").post(createContact);

router.route('/:id').get(getIndivualId);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

module.exports = router;