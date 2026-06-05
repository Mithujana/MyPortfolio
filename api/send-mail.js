import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).end();

    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_USER,
        subject,
        text: `${name}\n${email}\n${message}`,
    });

    res.status(200).json({ success: true });
}