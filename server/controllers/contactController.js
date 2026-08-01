const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

exports.getMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) { res.status(500).json({ message: error.message }); }
};

exports.createMessage = async (req, res) => {
  try {

       const newContact = await Contact.create(req.body);

   
    // --- EMAIL CODE ---
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS },
    });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Portfolio Message: ${req.body.subject || "No Subject"}`,
      html: `
    <h3>New Message from your Portfolio!</h3>
    <p><strong>Name:</strong> ${req.body.name}</p>
    <p><strong>Email:</strong> ${req.body.email}</p>
    <p><strong>Subject:</strong> ${req.body.subject || "N/A"}</p>
    <p><strong>Message:</strong></p>
    <p>${req.body.message}</p>
  `,
    };



    await transporter.sendMail(mailOptions);
    // ------------------

    res.status(201).json(newContact);
  } catch (error) {
     res.status(400).json({ message: error.message }); }
};

exports.updateMessage = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(contact);
  } catch (error) { res.status(400).json({ message: error.message }); }
};

exports.deleteMessage = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: 'Message deleted' });
  } catch (error) { res.status(500).json({ message: error.message }); }
};