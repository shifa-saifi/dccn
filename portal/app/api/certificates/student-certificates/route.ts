import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.json({ error: 'Missing email' }, { status: 400 });
  }

  try {
    const certs = await prisma.certificate.findMany({
      where: { studentEmail: email },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(certs);
  } catch (err) {
    console.error('Fetch student certificates error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
