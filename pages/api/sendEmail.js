// pages/api/sendEmail.js

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Extract the email details from the request body
  const { Name, Email, Message } = req.body;

  console.log(req.body);

  try {
    // Create a transporter using Gmail's SMTP server configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "bhola2266@gmail.com",
        pass: "lpxpsqfstvxgtalk",
      },
    });

    // Compose the email message
    const mailOptions = {
      from: "bhola2266@gmail.com",
      to: "ukdevelopers007@gmail.com",
      subject: "Portfolio Message "+Name,
      text: Message +" "+Email,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Email sent successfully
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    // Error occurred while sending the email
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
}
