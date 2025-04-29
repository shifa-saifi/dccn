'use client';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Grid,
  Stack,
  CircularProgress,
} from '@mui/material';

const UserWallets = () => {
  const [certificates, setCertificates] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (user) {
      setCurrentUser(user);
      fetchStudentCertificates(user.email);
    }
  }, []);

  const fetchStudentCertificates = async (email: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/certificates/student-certificates?email=${encodeURIComponent(email)}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to fetch certificates');
      setCertificates(data || []);
    } catch (err: any) {
      console.error('Error fetching:', (err as Error).message);
    } finally {
      setLoading(false);
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
        My Certificates
      </Typography>

      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Track all certificates issued to you. Stay updated about their approval status.
      </Typography>

      {loading ? (
        <Box display="flex" justifyContent="center" py={5}>
          <CircularProgress />
        </Box>
      ) : certificates.length === 0 ? (
        <Typography align="center" color="text.secondary">
          No certificates issued yet.
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
                    Issued by: {cert.issuerName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Issued on: {new Date(cert.dateIssued).toLocaleDateString()}
                  </Typography>

                  <Stack spacing={1} sx={{ mt: 2 }}>
                    <Chip
                      label={`Status: ${cert.status}`}
                      color={getStatusColor(cert.status)}
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

                <Box sx={{ px: 2, pb: 2 }}>
                  <Button
                    fullWidth
                    variant="outlined"
                    color="primary"
                    href={`/certificates/view?recipientName=${cert.recipientName}&course=${cert.course}&dateIssued=${cert.dateIssued}&certificateId=${cert.certificateId}`}
                  >
                    View Certificate
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default UserWallets;
