import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Card, CardContent, Grid } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

const RevokeCertificate = () => {
  const [certificateId, setCertificateId] = useState('');

  const handleRevoke = () => {
    if (!certificateId) {
      alert('Please enter a valid Certificate ID.');
      return;
    }
    alert(`Certificate with ID ${certificateId} has been revoked.`);
    setCertificateId('');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #FF6B6B, #FF3B3B)',
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
          <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: '#D32F2F' }}>
            Revoke Certificate
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
            Enter the unique identifier of the certificate you wish to revoke.
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

          {/* Revoke Button */}
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            startIcon={<CancelIcon />}
            sx={{
              py: 1.5,
              fontSize: '16px',
              fontWeight: 'bold',
              borderRadius: '10px',
              transition: 'all 0.3s ease',
              backgroundColor: '#D32F2F',
              '&:hover': { backgroundColor: '#B71C1C' },
            }}
            onClick={handleRevoke}
          >
            Revoke Certificate
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RevokeCertificate;
