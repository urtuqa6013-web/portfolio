const express = require('express');
const router = express.Router();
const { getMessages, createMessage, updateMessage, deleteMessage } = require('../controllers/contactController');

router.route('/').get(getMessages).post(createMessage);
router.route('/:id').put(updateMessage).delete(deleteMessage);

module.exports = router;