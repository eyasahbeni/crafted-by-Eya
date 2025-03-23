const { Message } = require('../models');
const sendEmail = require('../utils/sendEmail');
// Get all messages
const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.findAll({ order: [['created_at', 'DESC']] });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
};

// Get message by ID
const getMessageById = async (req, res) => {
  try {
    const message = await Message.findByPk(req.params.id);
    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }
    res.json(message);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch message' });
  }
};

const fs = require('fs');
const path = require('path');

const createMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const newMessage = await Message.create({ name, email, subject, message });

    // Load and customize admin email HTML
    let adminEmailHtml = fs.readFileSync(path.join(__dirname, '../templates/adminEmail.html'), 'utf8');
    adminEmailHtml = adminEmailHtml
      .replace('{{name}}', name)
      .replace('{{email}}', email)
      .replace('{{subject}}', subject || 'No subject')
      .replace('{{message}}', message);

    // Load and customize user confirmation email HTML
    let userEmailHtml = fs.readFileSync(path.join(__dirname, '../templates/adminEmail.html'), 'utf8');
    userEmailHtml = userEmailHtml
      .replace('{{name}}', name)
      .replace('{{adminEmail}}', process.env.EMAIL_USER);

      await sendEmail({ name, email, subject, message });


    res.status(201).json(newMessage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send message' });
  }
};


// Delete a message
const deleteMessage = async (req, res) => {
  try {
    const message = await Message.findByPk(req.params.id);
    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }

    await message.destroy();
    res.json({ message: 'Message deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete message' });
  }
};

module.exports = {
  getAllMessages,
  getMessageById,
  createMessage,
  deleteMessage,
};
