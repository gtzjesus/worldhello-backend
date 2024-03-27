import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const port = process.env.PORT || 3001;

// Middleware to parse JSON request body
app.use(bodyParser.json());

// Update CORS configuration to allow requests from your frontend URL
app.use(
  cors({
    origin: '*',
    // origin: 'https://worldhello.us',

    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Handle preflight requests
app.options('/api/sendEmail', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  res.status(200).end();
});

// Handle POST route to send email
app.post('/api/sendEmail', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      website,
      companyName,
      howCanWeHelp,
      howDidYouHear,
    } = req.body;

    // Create nodemailer transporter for persmission to access authenticated email
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: 'gtz.jesus@outlook.com',
        pass: 'mjesccccultmcjzs',
      },
    });

    // Set our mail options
    const mailOptions = {
      from: 'gtz.jesus@outlook.com',
      to: 'gtz.jesus@outlook.com',
      subject: 'WorldHello New Lead',
      html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Website: ${website}</p>
            <p>Company Name: ${companyName}</p>
            <p>How can we help: ${howCanWeHelp}</p>
            <p>How did you hear: ${howDidYouHear}</p>
            `,
    };

    // Send mail with built-in 'sendMail' function
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    // Status success
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);

    // Status fail
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('WorldHello!');
});

// Code logic to listen to the port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
