import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(_: any, { params }: { params: { id: string } }) {
  try {
    const cert = await prisma.certificate.findUnique({ where: { certificateId: params.id } });
    if (!cert) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    const updated = await prisma.certificate.update({
      where: { certificateId: params.id },
      data: {
        rejected: true,
        status: 'Rejected',
      },
    });

    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Rejection failed' }, { status: 500 });
  }
}
