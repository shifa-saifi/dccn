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
} from '@mui/material';

const CertificateListPage = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      const res = await fetch('/api/certificates/list');
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Failed to fetch');

      // Sort by createdAt descending
      const sorted = data.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      setCertificates(sorted);
    } catch (error: any) {
      console.error('Error fetching certificates:', error.message);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
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

      <Typography variant="body1" align="center" color="textSecondary" sx={{ mb: 4 }}>
        Most recent certificates are shown at the top. Admin and Institutions can manage these from their dashboards.
      </Typography>

      {certificates.length === 0 ? (
        <Typography align="center" color="textSecondary">
          No certificates found.
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {certificates.map((cert: any, index: number) => (
            <Grid item xs={12} sm={6} md={4} key={cert.id || index}>
              <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    ID: {cert.certificateId}
                  </Typography>
                  <Chip
                    label={cert.status || 'Pending'}
                    color={getStatusColor(cert.status || 'pending')}
                    sx={{ mt: 2 }}
                  />
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

export default CertificateListPage;
