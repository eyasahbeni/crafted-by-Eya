// utils/sendEmail.js
const nodemailer = require('nodemailer');

const sendEmail = async (messageData) => {
  const { name, email, subject, message } = messageData;

  // Create transporter
  let transporter = nodemailer.createTransport({
    service: 'gmail', // or use 'smtp.ethereal.email' for testing
    auth: {
      user: process.env.ADMIN_EMAIL, // your admin email
      pass: process.env.ADMIN_PASS   // your email password or App Password
    }
  });

  // Email to Admin
  let adminMailOptions = {
    from: `"Portfolio Contact" <${process.env.ADMIN_EMAIL}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `📬 New Message: ${subject}`,
    html: `
      <h2>📩 New Message from Portfolio</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `
  };

  // Email to User
  let userMailOptions = {
    from: `"Portfolio Reply" <${process.env.ADMIN_EMAIL}>`,
    to: email,
    subject: `✅ Message Received`,
    html: `
      <div style="font-family: Arial; padding: 20px;">
        <h2 style="color: #3b82f6;">Thank You, ${name}!</h2>
        <p>We’ve received your message and will get back to you shortly.</p>
        <p>Best regards,<br><strong>Crafted by Eya Team</strong></p>
      </div>
    `
  };

  try {
    const adminInfo = await transporter.sendMail(adminMailOptions);
    console.log('✅ Admin email sent:', adminInfo.response);

    const userInfo = await transporter.sendMail(userMailOptions);
    console.log('✅ Confirmation email sent to user:', userInfo.response);
  } catch (error) {
    console.error('❌ Email sending failed:', error);
  }
};

module.exports = sendEmail;
