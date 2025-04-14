import { NextResponse } from 'next/server';
import {prisma} from '@/lib/prisma';

export async function GET() {
  try {
    const certificates = await prisma.certificate.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(certificates);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch certificates' }, { status: 500 });
  }
}
