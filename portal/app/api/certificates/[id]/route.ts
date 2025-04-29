import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  if (!id) {
    return NextResponse.json({ error: 'ID is required' }, { status: 400 });
  }
  try {
    const cert = await prisma.certificate.findUnique({
      where: { certificateId: id },
    });

    if (!cert) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json(cert, { status: 200 });
  }
  catch (error) {
    console.error('Error fetching certificate:', error);
    return NextResponse.json({ error: 'Fetch failed' }, { status: 500 });
  }
}
