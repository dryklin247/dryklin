import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_ADDRESS,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: email, // sender address
      to: process.env.GMAIL_ADDRESS, // list of receivers
      subject: `New Message from ${name}`, // Subject line
      replyTo: email,
      html: `<span>Hi there, my name is ${name}</span><br /><br /><span>Phone number - ${phone}</span><br /><br /><span>${message}</span>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return new Response(
          JSON.stringify({ success: false, message: "Email not sent" }),
          { status: 400 }
        );
      } else {
        return new Response(
          JSON.stringify({
            success: true,
            message: "Email sent successfully",
            data: info.response,
          }),
          { status: 200 }
        );
      }
    });
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: err,
        message: "Error Sending Email",
      }),
      { status: 500 }
    );
  }
}
