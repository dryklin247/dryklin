import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_ADDRESS,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.GMAIL_ADDRESS,
      subject: `New Message from ${name}`,
      replyTo: email,
      html: `
        <p>Hi there, my name is ${name}</p>
        <p>Phone number: ${phone}</p>
        <p>${message}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully",
        data: info.response,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error sending email:", err);
    return NextResponse.json(
      {
        success: false,
        message: "Error sending email",
        error: err,
      },
      { status: 500 }
    );
  }
}
