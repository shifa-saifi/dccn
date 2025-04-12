// /app/api/cert/verify/route.ts
import { prisma } from '@/lib/prisma';
import { getUserFromToken } from '@/lib/jwt';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { certId } = await req.json();
  const user = getUserFromToken(req);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const cert = await prisma.certificate.findUnique({ where: { certId } });
  if (!cert) return NextResponse.json({ error: 'Certificate not found' }, { status: 404 });

  // Prevent duplicate verification
  if (cert.verifiedBy.includes(user.role)) {
    return NextResponse.json({ message: 'Already verified by this role' });
  }

  const updatedVerifiedBy = [...cert.verifiedBy, user.role];

  let newStatus = cert.status;
  if (updatedVerifiedBy.includes('Institute') && updatedVerifiedBy.includes('Admin')) {
    newStatus = 'verified';
  } else if (updatedVerifiedBy.includes('Institute')) {
    newStatus = 'institute-verified';
  }

  const updated = await prisma.certificate.update({
    where: { certId },
    data: {
      verifiedBy: updatedVerifiedBy,
      status: newStatus,
    },
  });

  return NextResponse.json({ success: true, updated });
}
export async function GET(req: Request) {
  const { certId } = req.url.split('?')[1];
  const user = getUserFromToken(req);
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const cert = await prisma.certificate.findUnique({ where: { certId } });
  if (!cert) return NextResponse.json({ error: 'Certificate not found' }, { status: 404 });

  return NextResponse.json(cert);
}
export async function DELETE(req: Request) {
    const { certId } = req.url.split('?')[1];
    const user = getUserFromToken(req);
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    
    const cert = await prisma.certificate.findUnique({ where: { certId } });
    if (!cert) return NextResponse.json({ error: 'Certificate not found' }, { status: 404 });
    
    await prisma.certificate.delete({ where: { certId } });
    
    return NextResponse.json({ success: true });
    }

    