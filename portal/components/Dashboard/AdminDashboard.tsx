'use client';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  CircularProgress,
  Snackbar,
  Alert,
} from '@mui/material';
import CertificateCard from '../Shared/CertificateCard';

interface CertificateCardProps {
  data: any;
  showActions?: boolean;
  role?: '' | 'admin' | 'institution';
  onApprove?: () => void;
  onReject?: () => void;
}

const AdminDashboard:React.FC<CertificateCardProps> = () => {
  const [certificates, setCertificates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState({ open: false, message: '', severity: 'success' });

  const fetchCertificates = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/certificates/list');
      const data = await res.json();
      setCertificates(data.certificates || []);
    } catch (error) {
      console.error('Failed to fetch certificates:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (certificateId: string) => {
    try {
      const res = await fetch('/api/certificates/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ certificateId, approver: 'admin' }),
      });
      const result = await res.json();
      if (res.ok) {
        setAlert({ open: true, message: 'Certificate approved!', severity: 'success' });
        fetchCertificates();
      } else {
        throw new Error(result.message || 'Approval failed');
      }
    } catch (err: any) {
      setAlert({ open: true, message: (err as Error).message, severity: 'error' });
    }
  };

  const handleReject = async (certificateId: string) => {
    try {
      const res = await fetch('/api/certificates/reject', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ certificateId }),
      });
      const result = await res.json();
      if (res.ok) {
        setAlert({ open: true, message: 'Certificate rejected.', severity: 'info' });
        fetchCertificates();
      } else {
        throw new Error(result.message || 'Rejection failed');
      }
    } catch (err: any) {
      setAlert({ open: true, message: (err as Error).message, severity: 'error' });
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Admin Dashboard
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Review and manage all issued certificates.
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : certificates.length === 0 ? (
        <Typography>No certificates found.</Typography>
      ) : (
        <Grid container spacing={3}>
          {certificates
            .sort((a, b) => new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime())
            .map((cert) => (
              <Grid item xs={12} md={6} lg={4} key={cert.id}>
                <CertificateCard
                  data={cert}
                  showActions
                  role="admin"
                  // onApprove={() => handleApprove(cert.id)}
                  // onReject={() => handleReject(cert.id)}
                />
              </Grid>
            ))}
        </Grid>
      )}

      <Snackbar
        open={alert.open}
        autoHideDuration={3000}
        onClose={() => setAlert({ ...alert, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={alert.severity as any} variant="filled">
          {alert.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AdminDashboard;
