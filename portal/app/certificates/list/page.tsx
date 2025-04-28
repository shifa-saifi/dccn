'use client';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Stack,
} from '@mui/material';

const CertificateListPage = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    setCurrentUser(user);
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/certificates/list');
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Failed to fetch');

      const sorted = data.sort(
        (a: any, b: any) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setCertificates(sorted);
    } catch (error: any) {
      console.error('Error fetching certificates:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (certId: string, action: 'approve' | 'reject') => {
    try {
      const approver = currentUser?.role?.toLowerCase(); // 'admin' or 'institution'

      if (!['admin', 'institution'].includes(approver)) {
        throw new Error('Invalid approver');
      }

      const res = await fetch('/api/certificates/certStatus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: certId, action, approver }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to update status');

      fetchCertificates(); // Refresh the list
    } catch (err) {
      console.log('Error updating status:', err);
      console.error('Status change failed:', err.message);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'approved':
        return 'success';
      case 'rejected':
        return 'error';
      case 'pending':
      default:
        return 'warning';
    }
  };

  return (
    <Box sx={{ py: 6, px: 4 }}>
      <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
        All Issued Certificates
      </Typography>

      <Typography
        variant="body1"
        align="center"
        sx={{ mb: 4 }}
      >
        Most recent certificates are shown at the top. Admin and Institutions can
        manage these from their dashboards.
      </Typography>

      {loading ? (
        <Typography align="center">Loading certificates...</Typography>
      ) : certificates.length === 0 ? (
        <Typography align="center" color="textSecondary">
          No certificates found.
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {certificates.map((cert: any, index: number) => (
            <Grid item xs={12} sm={6} md={4} key={cert.id || index}>
              <Card
                elevation={3}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {cert.course}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                    Recipient: {cert.recipientName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Email: {cert.studentEmail}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Issued: {new Date(cert.dateIssued).toLocaleDateString()}
                  </Typography>
                  <Typography variant="body2">
                    ID: {cert.certificateId}
                  </Typography>

                  <Stack spacing={1} sx={{ mt: 2 }}>
                    <Chip
                      label={`Status: ${cert.status}`}
                      color={getStatusColor(cert.status || 'pending')}
                      variant="outlined"
                    />
                    <Stack direction="column" spacing={0.5}>
                      {cert.approvedByAdmin && (
                        <Chip label="✅ Approved by Admin" color="success" size="small" />
                      )}
                      {cert.approvedByInstitute && (
                        <Chip label="🏫 Approved by Institute" color="info" size="small" />
                      )}
                      {cert.rejected && (
                        <Chip label="❌ Rejected" color="error" size="small" />
                      )}
                      {!cert.approvedByAdmin && !cert.rejected && (
                        <Chip label="⏳ Awaiting Admin Approval" color="warning" size="small" />
                      )}
                      {!cert.approvedByInstitute && !cert.rejected && (
                        <Chip label="⏳ Awaiting Institute Approval" color="warning" size="small" />
                      )}
                    </Stack>
                  </Stack>

                </CardContent>

                <Stack spacing={1} sx={{ px: 2, pb: 2 }}>
                  <Button
                    fullWidth
                    variant="outlined"
                    color="primary"
                    href={`/certificates/view?recipientName=${cert.recipientName}&course=${cert.course}&dateIssued=${cert.dateIssued}&certificateId=${cert.certificateId}`}
                  >
                    View Certificate
                  </Button>

                  {['Admin', 'Institution'].includes(currentUser?.role) && (
                    <Stack direction="row" spacing={1}>
                      <Button
                        variant="contained"
                        color="success"
                        fullWidth
                        onClick={() => handleStatusChange(cert.id, 'approve')}
                        disabled={
                          cert.status === 'approved' || cert.status === 'rejected'
                        }
                      >
                        Approve
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                        fullWidth
                        onClick={() => handleStatusChange(cert.id, 'reject')}
                        disabled={cert.status === 'rejected'}
                      >
                        Reject
                      </Button>
                    </Stack>
                  )}
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default CertificateListPage;
