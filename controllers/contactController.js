//@desc get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
    res.status(200).json({ message: "All the Contacts" });
};

//@desc create a contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
    res.status(201).json({ message: "contact created" });
};

//@desc get contact by id
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
    res.status(200).json({ message: `get contact for ${req.params.id}` });
};

//@desc update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({ message: `update contact for ${req.params.id}` });
};

//@desc delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({ message: `delete contact for ${req.params.id}` });
};

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};