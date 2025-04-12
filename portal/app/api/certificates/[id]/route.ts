import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(_: any, { params }: { params: { id: string } }) {
  try {
    const cert = await prisma.certificate.findUnique({
      where: { certificateId: params.id },
    });

    if (!cert) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json(cert, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Fetch failed' }, { status: 500 });
  }
}



export async function DELETE(_: any, { params }: { params: { id: string } }) {
    try {
      await prisma.certificate.delete({
        where: { certificateId: params.id },
      });
  
      return NextResponse.json({ message: 'Deleted' }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: 'Delete failed' }, { status: 500 });
    }
  }