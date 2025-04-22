import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields.' }, { status: 400 });
    }

    await prisma.supportMessage.create({ data: { name, email, message } });

    // send email notification
    await sendEmail({ name, email, message });

    return NextResponse.json({ success: true, message: 'Message received and stored!' });
  } catch (err) {
    console.error('[Support Message Error]', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

async function sendEmail({ name, email, message }: any) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: +process.env.SMTP_PORT!,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"DCN Support" <${process.env.SMTP_USER}>`,
    to: process.env.SMTP_USER,
    subject: `New Contact Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });
}
