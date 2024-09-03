// app/api/contact/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  if (req.method === "POST") {
    try {
      const { name, email, phone, interest } = await req.json();

      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "rohan.gawande.web@gmail.com", // Replace with your email
          pass: "fsdr oexw bqyl ikjf", // Replace with your email password or app-specific password
        },
      });

      const mailOptions = {
        from: email,
        to: "aaravrealtymain@gmail.com", // Replace with the email address where you want to receive the form data
        subject: "Contact Form Submission",
        html: `
          <h1>Contact Form Submission</h1>
          <p>Name: ${name}</p>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
          <p>Interest: ${interest}</p>
        `,
      };

      await transporter.sendMail(mailOptions);

      return NextResponse.json({ message: "Email has been sent" });
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json({ message: "Email could not be sent" });
    }
  } else {
    return NextResponse.json({ message: "Method not allowed" });
  }
}
