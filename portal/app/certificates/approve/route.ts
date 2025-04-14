import { NextResponse } from 'next/server';
import {prisma} from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const { id, approver } = await req.json();

    if (!id || approver !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized or missing fields' }, { status: 400 });
    }

    const cert = await prisma.certificate.findUnique({ where: { id } });
    if (!cert) return NextResponse.json({ error: 'Certificate not found' }, { status: 404 });

    const updated = await prisma.certificate.update({
      where: { id },
      data: {
        approvedByAdmin: true,
        status: cert.approvedByInstitute ? 'approved' : 'pending',
      },
    });

    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: 'Approval failed' }, { status: 500 });
  }
}
