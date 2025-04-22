import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
    try {
        const { id, approver, action } = await req.json();

        if (!id || !approver) {
            return NextResponse.json({ error: 'Unauthorized or missing fields' }, { status: 400 });
        }

        const cert = await prisma.certificate.findUnique({ where: { id } });
        if (!cert) return NextResponse.json({ error: 'Certificate not found' }, { status: 404 });

        if (action === 'reject') {
            const updated = await prisma.certificate.update({
                where: { id },
                data: {
                    status: 'rejected',
                },
            });
            return NextResponse.json(updated);
        }

        if (action === 'approve') {
            if (approver === 'admin') {
                const updated = await prisma.certificate.update({
                    where: { id },
                    data: {
                        approvedByAdmin: true,
                        status: cert.approvedByInstitute ? 'approved' : 'pending',
                    },
                });
                return NextResponse.json(updated);
            }

            if (approver === 'institute') {
                const updated = await prisma.certificate.update({
                    where: { id },
                    data: {
                        approvedByInstitute: true,
                        status: cert.approvedByAdmin ? 'approved' : 'pending',
                    },
                });
                return NextResponse.json(updated);
            }
        }

        return NextResponse.json({ error: 'Invalid action or approver' }, { status: 400 });
    } catch (err) {
        return NextResponse.json({ error: 'Operation failed' }, { status: 500 });
    }
}
