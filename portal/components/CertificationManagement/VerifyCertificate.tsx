'use client';
import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CircularProgress,
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const VerifyCertificate = () => {
  const [certificateId, setCertificateId] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    if (!certificateId.trim()) {
      setVerificationStatus('Please enter a valid Certificate ID.');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      setVerificationStatus('You must be logged in to verify a certificate.');
      return;
    }

    setLoading(true);
    setVerificationStatus('');

    try {
      const res = await fetch('/api/cert/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ certificateId: certificateId.trim() }),
      });

      const data = await res.json();
      console.log("🚀 ~ handleVerify ~ data:", data)
      if (!res.ok) {
        setVerificationStatus('❌ Error verifying certificate. Please try again.');
        return;
      }
      

      if (res.ok) {
        const cert = data.cert;
        if (cert?.approvedByAdmin && cert?.approvedByInstitute) {
          setVerificationStatus(`✅ Certificate is VALID. Issued to: ${cert.recipientName}, Course: ${cert.course}, Status: ${cert.status}`);
        } else if (!cert?.approvedByAdmin && !cert?.approvedByInstitute) {
          setVerificationStatus('⚠️ Certificate is CREATED but no verification has been made yet.');
        } else if (!cert?.approvedByAdmin || !cert?.approvedByInstitute) {
          const pendingFrom = [];
          if (!cert?.approvedByAdmin) pendingFrom.push('Admin');
          if (!cert?.approvedByInstitute) pendingFrom.push('Institute');
          setVerificationStatus(`⚠️ Certificate verification is PENDING. Pending approval from: ${pendingFrom.join(' and ')}.`);
        } else {
          setVerificationStatus('❌ Certificate is INVALID or not yet verified.');
        }
      } else {
        setVerificationStatus('❌ Error verifying certificate. Please try again.');
      }
    } catch (err) {
      setVerificationStatus('❌ Error verifying certificate. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #4A90E2, #0074D9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <Card
        sx={{
          maxWidth: 500,
          width: '100%',
          p: 4,
          borderRadius: '15px',
          boxShadow: '0px 5px 20px rgba(0,0,0,0.3)',
          background: '#fff',
          textAlign: 'center',
        }}
      >
        <CardContent>
          <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: '#0074D9' }}>
            Verify Certificate
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
            Enter the certificate ID to verify its authenticity instantly.
          </Typography>

          <TextField
            fullWidth
            label="Certificate ID"
            variant="outlined"
            sx={{ mb: 3, backgroundColor: '#f9f9f9', borderRadius: '5px' }}
            value={certificateId}
            onChange={(e) => setCertificateId(e.target.value)}
          />

          <Button
            variant="contained"
            color="primary"
            fullWidth
            startIcon={<CheckCircleOutlineIcon />}
            sx={{
              py: 1.5,
              fontSize: '16px',
              fontWeight: 'bold',
              borderRadius: '10px',
              transition: 'all 0.3s ease',
              backgroundColor: '#0074D9',
              '&:hover': { backgroundColor: '#005bb5' },
            }}
            onClick={handleVerify}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : 'Verify Now'}
          </Button>

          {verificationStatus && (
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ mt: 3, color: verificationStatus.includes('VALID') ? 'green' : 'red' }}
            >
              {verificationStatus}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default VerifyCertificate;
