import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(_: any, { params }: { params: { email: string } }) {
  try {
    const certs = await prisma.certificate.findMany({
      where: { studentEmail: params.email },
    });

    return NextResponse.json(certs, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Fetch failed' }, { status: 500 });
  }
}
