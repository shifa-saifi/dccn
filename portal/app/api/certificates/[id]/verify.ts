import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const { approver } = await req.json();

  const cert = await prisma.certificate.findUnique({ where: { certificateId: params.id } });
  if (!cert) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  const updatedData: any = {};

  if (approver === 'admin') updatedData.approvedByAdmin = true;
  if (approver === 'institute') updatedData.approvedByInstitute = true;

  const isVerified = (updatedData.approvedByAdmin || cert.approvedByAdmin)
    && (updatedData.approvedByInstitute || cert.approvedByInstitute);

  updatedData.status = isVerified ? 'Verified' : 'Pending';

  const updated = await prisma.certificate.update({
    where: { certificateId: params.id },
    data: updatedData,
  });

  return NextResponse.json(updated, { status: 200 });
}
