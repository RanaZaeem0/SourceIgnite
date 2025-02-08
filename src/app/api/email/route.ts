import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  secure: true,
  auth: {
    user: process.env.GMAIL_FROM,
    pass: process.env.GMAIL_APP_PASSWORD
  } 
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
console.log( name, email, message,process.env.GMAIL_FROM, process.env.GMAIL_APP_PASSWORD);
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' }, 
        { status: 400 }
      );
    }

    const mailOptions = {
      from: process.env.GMAIL_FROM,
      to: 'hello@sourceignitegmail.com', // Explicitly set to infozyck@gmail.com
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Message:</h3>
        <p>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' }, 
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' }, 
      { status: 500 }
    );
  }
}
