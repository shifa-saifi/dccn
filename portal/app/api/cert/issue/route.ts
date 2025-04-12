import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const {
    certificateId,
    recipientName,
    course,
    dateIssued,
    issuerName,
    studentEmail,
  } = body;

  if (!certificateId || !recipientName || !course || !dateIssued || !studentEmail) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    const existing = await prisma.certificate.findUnique({ where: { certificateId } });
    if (existing) {
      return NextResponse.json({ error: 'Certificate ID already exists' }, { status: 409 });
    }

    const newCert = await prisma.certificate.create({
      data: {
        certificateId,
        recipientName,
        course,
        dateIssued,
        issuerName: issuerName || 'Decentralized Certification Network',
        studentEmail,
        approvedByAdmin: false,
        approvedByInstitute: false,
        rejected: false,
        status: 'Pending',
      },
    });

    return NextResponse.json(newCert, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create certificate' }, { status: 500 });
  }
}

// Get all certificates or a specific certificate by ID
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const certificateId = searchParams.get('certificateId');

  if (certificateId) {
    const cert = await prisma.certificate.findUnique({
      where: { certificateId },
    });

    if (!cert) {
      return NextResponse.json({ error: 'Certificate not found' }, { status: 404 });
    }

    return NextResponse.json(cert);
  }

  const certs = await prisma.certificate.findMany();
  return NextResponse.json(certs);
}

// Update a certificate by ID
export async function PUT(req: Request) {
  const { certificateId, ...updateData } = await req.json();

  const cert = await prisma.certificate.update({
    where: { certificateId },
    data: updateData,
  });

  return NextResponse.json(cert);
}

// Delete a certificate by ID
export async function DELETE(req: Request) {
  const { certificateId } = await req.json();

  await prisma.certificate.delete({
    where: { certificateId },
  });

  return NextResponse.json({ message: 'Certificate deleted successfully' });
}
