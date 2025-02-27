import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Card, CardContent, Grid } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const VerifyCertificate = () => {
  const [certificateId, setCertificateId] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('');

  const handleVerify = () => {
    if (!certificateId) {
      alert('Please enter a valid Certificate ID.');
      return;
    }

    // Simulating verification (You can replace this with an API call)
    if (certificateId === '123456') {
      setVerificationStatus('Certificate is VALID ✅');
    } else {
      setVerificationStatus('Certificate is INVALID ❌');
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

          {/* Certificate ID Input */}
          <TextField
            fullWidth
            label="Certificate ID"
            variant="outlined"
            sx={{ mb: 3, backgroundColor: '#f9f9f9', borderRadius: '5px' }}
            value={certificateId}
            onChange={(e) => setCertificateId(e.target.value)}
          />

          {/* Verify Button */}
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
          >
            Verify Now
          </Button>

          {/* Verification Status */}
          {verificationStatus && (
            <Typography variant="h6" fontWeight="bold" sx={{ mt: 3, color: verificationStatus.includes('VALID') ? 'green' : 'red' }}>
              {verificationStatus}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default VerifyCertificate;
