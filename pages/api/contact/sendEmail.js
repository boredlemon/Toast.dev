import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email message
    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: process.env.EMAIL_TO, // Change this to your recipient email
      subject: `Submission! - ${name} ${email}`,
      html: `
      <html>
          <head>
            <style>
              /* Add your CSS styles here */
            </style>
          </head>
          <body>
            <table width="275" height="95" style="background-color: #1e3a8a; border-radius: 10px; border-collapse: collapse; margin: 20px;">
              <tr>
                <td style="padding: 20px;">
                  <p style="font-family: Arial, sans-serif; color: #ffffff; font-size: 16px;">
                    ${message} - from ${name} (${email})
                  </p>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).send('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Failed to send email');
    }
  } else {
    res.status(405).end();
  }
}
